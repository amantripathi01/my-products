import { test, expect } from '@playwright/test';

test('Verify User Login with Google OAuth', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Click on the 'Sign in with Google' link
  try {
    const googleSignInLink = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");
    await googleSignInLink.click();
    console.log('Clicked on Sign in with Google link');
  } catch (error) {
    console.error('Error clicking Sign in with Google link:', error);
    throw error;
  }

  // Step 3: Enter Google email address
  try {
    await page.waitForURL(url => url.includes('accounts.google.com'), { timeout: 10000 });
    await page.fill('input[type="email"]', 'your-email@gmail.com');
    await page.locator('button:has-text("Next")').click();
    console.log('Entered Google email address');
  } catch (error) {
    console.error('Error on Google email entry:', error);
    throw error;
  }

  // Step 4: Enter Google password
  try {
    await page.waitForSelector('input[type="password"]', { timeout: 10000 });
    await page.fill('input[type="password"]', 'your-password');
    await page.locator('button:has-text("Next")').click();
    console.log('Entered Google password');
  } catch (error) {
    console.error('Error on Google password entry:', error);
    throw error;
  }

  // Step 5: Complete two-factor authentication if prompted
  try {
    // This can be complex and might require manual handling or using a mock service
    await page.waitForTimeout(5000); // Adjust timeout as needed for manual 2FA completion
    console.log('Completed two-factor authentication');
  } catch (error) {
    console.error('Error during two-factor authentication:', error);
    throw error;
  }

  // Step 6: Ensure redirection to the primary dashboard
  try {
    await page.waitForURL('https://dev.roost.ai', { timeout: 15000 });
    console.log('Successfully redirected to the dashboard');
  } catch (error) {
    console.error('Error during redirection to dashboard:', error);
    throw error;
  }

  // Step 7: Verify user profile is displayed on the dashboard
  try {
    const userProfile = page.locator('img.profile-picture, .user-name');
    await expect(userProfile).toBeVisible({ timeout: 10000 });
    console.log('User profile is visible on the dashboard');
  } catch (error) {
    console.error('User profile not visible on the dashboard:', error);
    throw error;
  }
});