const { test, expect } = require('@playwright/test');

test('Feedback Form Submission', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT Config page
  await page.goto('https://dev.roost.ai/gptCLIForm');
  await expect(page).toHaveURL('https://dev.roost.ai/gptCLIForm');

  // Step 2: Locate the Feedback form textarea
  const feedbackTextarea = page.locator('[data-testid="Feedback-form"]');
  await expect(feedbackTextarea).toBeVisible();

  // Step 3: Type feedback comments into the textarea
  const feedbackText = "This is a test feedback comment.";
  await feedbackTextarea.fill(feedbackText);

  // Step 4: Ensure the feedback is clear and complete
  await expect(feedbackTextarea).toHaveValue(feedbackText);

  // Step 5: Locate the Submit button for the feedback form
  const submitButton = page.locator('button[type="submit"]');

  // Step 6: Click the Submit button
  await submitButton.click();

  // Step 7: Observe any confirmation message indicating feedback submission
  const confirmationMessage = page.locator('text=Feedback submitted successfully');
  await expect(confirmationMessage).toBeVisible();

  // Step 8: Verify that the feedback submission does not trigger any errors
  const errorMessage = page.locator('.error-message');
  await expect(errorMessage).not.toBeVisible();

  // Step 9: Check the textarea clears after submission
  await expect(feedbackTextarea).toHaveValue('');

  // Step 10: Attempt to submit feedback with an empty textarea
  await submitButton.click();
  const emptyFieldError = page.locator('text=Please enter feedback');
  await expect(emptyFieldError).toBeVisible();

  // Step 11: Verify submission with a very long feedback text
  const longFeedbackText = 'A'.repeat(5000);
  await feedbackTextarea.fill(longFeedbackText);
  await submitButton.click();
  await expect(confirmationMessage).toBeVisible();

  // Step 12: Test feedback submission under slow network conditions
  await page.setOffline(true);
  try {
    await submitButton.click();
  } catch (error) {
    console.log('Network error occurred as expected:', error);
  } finally {
    await page.setOffline(false);
  }

  // Step 13: Check feedback submission with special characters
  const specialCharFeedback = '!@#$%^&*()_+{}:"<>?';
  await feedbackTextarea.fill(specialCharFeedback);
  await submitButton.click();
  await expect(confirmationMessage).toBeVisible();

  // Step 14: Refresh the page and verify feedback form resets correctly
  await page.reload();
  await expect(feedbackTextarea).toHaveValue('');

  // Step 15: Validate error handling for server-side issues during submission
  await feedbackTextarea.fill(feedbackText);
  await page.route('https://api.roost.ai/submit-feedback', route => route.fulfill({
    status: 500,
    body: 'Internal Server Error'
  }));
  await submitButton.click();
  const serverErrorMessage = page.locator('text=Server error, please try again later');
  await expect(serverErrorMessage).toBeVisible();
});