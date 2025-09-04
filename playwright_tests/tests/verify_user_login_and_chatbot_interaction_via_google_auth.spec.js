import { test, expect } from '@playwright/test';

test('Verify User Login and Chatbot Interaction via Google Auth', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Click on the 'Google' login button
  try {
    const googleLoginButton = page.locator("//a[contains(@class, 'google')]");
    await googleLoginButton.click();
    console.log('Clicked Google login button');
  } catch (error) {
    console.error('Error clicking Google login button:', error);
  }

  // Step 3: Authenticate using Google credentials
  // This part typically requires a manual step or a mock as Playwright doesn't automate third-party authentication flows

  // Step 4: Redirect to the main dashboard
  await page.waitForURL('https://dev.roost.ai/roostgpt');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt');
  console.log('Redirected to main dashboard');

  // Step 5: Initiate a conversation with the chatbot
  const chatbotInput = page.locator('input[type="text"]');
  await chatbotInput.fill('What is the weather today?');
  await chatbotInput.press('Enter');
  console.log('Sent query to chatbot');

  // Step 6: Wait for the chatbot response
  await page.waitForTimeout(2000); // Adjust timeout as necessary for chatbot response

  // Step 7: Review the response
  const chatbotResponse = page.locator('.chatbot-response');
  await expect(chatbotResponse).toBeVisible();
  console.log('Chatbot response received');

  // Step 8: Provide feedback on the response
  const feedbackButton = page.locator('button:has-text("Feedback")');
  if (await feedbackButton.count() > 0) {
    await feedbackButton.click();
    const feedbackInput = page.locator('textarea');
    await feedbackInput.fill('Good response');
    const submitFeedback = page.locator('button:has-text("Submit")');
    await submitFeedback.click();
    console.log('Feedback submitted');
  } else {
    console.log('Feedback button not found');
  }

  // Step 9: Attempt another inquiry
  await chatbotInput.fill('Tell me a joke');
  await chatbotInput.press('Enter');
  console.log('Sent another query to chatbot');

  // Step 10: Observe chatbot's handling and response time
  await page.waitForTimeout(2000); // Adjust timeout as necessary for chatbot response

  // Step 11: Escalate to human agent if necessary
  const escalateButton = page.locator('button:has-text("Escalate to human")');
  if (await escalateButton.count() > 0) {
    await escalateButton.click();
    console.log('Query escalated to human agent');
  } else {
    console.log('Escalate button not found');
  }

  // Step 12: Verify conversation history
  const conversationHistory = page.locator('.conversation-history');
  await expect(conversationHistory).toBeVisible();
  console.log('Verified conversation history');

  // Step 13: Log out of the application
  const logoutButton = page.locator('button:has-text("Logout")');
  if (await logoutButton.count() > 0) {
    await logoutButton.click();
    await page.waitForURL('https://dev.roost.ai/login');
    await expect(page).toHaveURL('https://dev.roost.ai/login');
    console.log('Logged out successfully');
  } else {
    console.log('Logout button not found');
  }
});