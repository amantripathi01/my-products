const { test, expect } = require('@playwright/test');

test('Verify User Can Login Via Microsoft', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Locate the Microsoft login button using the stable selector
  const microsoftLoginButton = page.locator("//a[@href='https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code&scope=user.read&state=azure&client_id=946156a9-5142-4469-b79f-bdcc9e76cf7f&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'azure')]");

  // Step 3: Click the Microsoft login button
  await microsoftLoginButton.click();

  // Step 4: Verify that the Microsoft authentication page is displayed
  await page.waitForURL('https://login.microsoftonline.com/**');
  await expect(page).toHaveURL(/.*login\.microsoftonline\.com.*/);

  // Step 5: Enter valid Microsoft account credentials
  try {
    await page.fill('input[type="email"]', 'your-email@example.com');
    await page.click('input[type="submit"]');
    await page.fill('input[type="password"]', 'your-secure-password');
    await page.click('input[type="submit"]');
  } catch (error) {
    console.error('Error during Microsoft login:', error);
  }

  // Step 6: Submit the authentication form
  await page.click('input[type="submit"]');

  // Step 7: Ensure that the user is redirected to the dashboard
  await page.waitForURL('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');

  // Step 8: Check that the user's profile information is correct on the dashboard
  const userProfile = page.locator('.user-profile');
  await expect(userProfile).toBeVisible();
  await expect(userProfile).toContainText('Your Profile Name');

  // Step 9: Log out to end the session
  const logoutButton = page.locator('button:has-text("Logout")');
  await logoutButton.click();
  await page.waitForURL('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
});