const { test, expect } = require('@playwright/test');

test('Verify User Login with GitHub OAuth', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Click on the 'Sign in with GitHub' link
  try {
    const githubSignInLink = page.locator("//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]");
    await githubSignInLink.click();
    console.log('Clicked on the "Sign in with GitHub" link');
  } catch (error) {
    console.error('Error clicking GitHub sign-in link:', error);
    throw error;
  }

  // Step 3: Enter GitHub username
  try {
    await page.waitForURL('https://github.com/login');
    const usernameInput = page.locator('input[name="login"]');
    await usernameInput.fill('your-github-username');
    console.log('Entered GitHub username');
  } catch (error) {
    console.error('Error entering GitHub username:', error);
    throw error;
  }

  // Step 4: Enter GitHub password and submit
  try {
    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.fill('your-github-password');
    await page.locator('input[name="commit"]').click();
    console.log('Entered GitHub password and submitted');
  } catch (error) {
    console.error('Error entering GitHub password:', error);
    throw error;
  }

  // Step 5: Authorize the application if prompted
  try {
    const authorizeButton = page.locator('button[name="authorize"]');
    if (await authorizeButton.count() > 0) {
      await authorizeButton.click();
      console.log('Authorized the application');
    }
  } catch (error) {
    console.error('Error during application authorization:', error);
    throw error;
  }

  // Step 6: Ensure redirection to the primary dashboard
  try {
    await page.waitForURL('https://dev.roost.ai');
    await expect(page).toHaveURL('https://dev.roost.ai');
    console.log('Successfully redirected to the primary dashboard');
  } catch (error) {
    console.error('Error during redirection to dashboard:', error);
    throw error;
  }

  // Step 7: Confirm the user's profile is visible on the dashboard
  try {
    const userProfile = page.locator('.user-profile'); // Adjust the selector as necessary
    await expect(userProfile).toBeVisible();
    console.log('User profile is visible, indicating successful login');
  } catch (error) {
    console.error('User profile not visible on dashboard:', error);
    throw error;
  }
});