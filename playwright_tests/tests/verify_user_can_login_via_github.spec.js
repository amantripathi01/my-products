const { test, expect } = require('@playwright/test');

test('Verify User Can Login Via GitHub', async ({ page }) => {
  // Step 1: Open the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Identify the GitHub login option using the stable selector
  const githubLoginButton = page.locator("//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]");

  // Step 3: Click the GitHub login button
  try {
    await githubLoginButton.click();
    console.log('Clicked on the GitHub login button');
  } catch (error) {
    console.error('Error clicking the GitHub login button:', error);
    throw error;
  }

  // Step 4: Verify the GitHub authentication page appears
  await page.waitForNavigation();
  await expect(page).toHaveURL(/https:\/\/github\.com\/login/);

  // Step 5: Enter valid GitHub credentials
  try {
    const usernameInput = page.locator('input[name="login"]');
    const passwordInput = page.locator('input[name="password"]');
    const signInButton = page.locator('input[name="commit"]');

    await usernameInput.fill('your-github-username');
    await passwordInput.fill('your-github-password');
    console.log('Entered GitHub credentials');
    
    // Step 6: Submit the GitHub authentication
    await signInButton.click();
    console.log('Submitted GitHub authentication');
  } catch (error) {
    console.error('Error during GitHub authentication:', error);
    throw error;
  }

  // Step 7: Check if the user is redirected to the main dashboard
  await page.waitForNavigation();
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');

  // Step 8: Verify the user's profile information on the dashboard
  const userProfile = page.locator('[data-testid="user-profile"]');
  await expect(userProfile).toBeVisible();
  console.log('User profile is visible on the dashboard');

  // Step 9: Log out from the session
  try {
    const logoutButton = page.locator('[data-testid="logout-button"]');
    await logoutButton.click();
    console.log('Logged out from the session');
  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
});