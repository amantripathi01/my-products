const { test, expect } = require('@playwright/test');

test('Verify User Login with Okta OAuth', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Click on the 'Sign in with Okta' link
  try {
    const oktaSignInLink = page.locator("//a[@href='https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'okta')]");
    await oktaSignInLink.click();
    console.log('Clicked on Sign in with Okta link');
  } catch (error) {
    console.error('Error clicking on Okta link:', error);
    throw error;
  }

  // Step 3 & 4: Enter Okta account credentials and submit
  try {
    await page.waitForURL('https://dev-53854943.okta.com/*'); // Wait for Okta login page
    await expect(page).toHaveURL(/https:\/\/dev-53854943\.okta\.com\/.*/);
    
    // Fill Okta login form
    await page.fill('input[name="username"]', 'your-okta-username');
    await page.fill('input[name="password"]', 'your-okta-password');
    await page.click('button[type="submit"]');
    console.log('Entered Okta credentials and submitted form');
  } catch (error) {
    console.error('Error during Okta authentication:', error);
    throw error;
  }

  // Step 5: Handle two-factor authentication if prompted
  try {
    await page.waitForNavigation({ waitUntil: 'networkidle' });
    // Assume two-factor authentication step is handled manually or with a predefined method
    console.log('Completed two-factor authentication if prompted');
  } catch (error) {
    console.error('Error during two-factor authentication:', error);
    throw error;
  }

  // Step 6: Verify redirection to the dashboard
  try {
    await expect(page).toHaveURL('https://dev.roost.ai');
    console.log('Successfully redirected to the dashboard');
  } catch (error) {
    console.error('Redirection to the dashboard failed:', error);
    throw error;
  }

  // Step 7: Ensure the user's profile is displayed
  try {
    const userProfile = page.locator('.user-profile');
    await expect(userProfile).toBeVisible();
    console.log('User profile is visible on the dashboard');
  } catch (error) {
    console.error('User profile verification failed:', error);
    throw error;
  }
});