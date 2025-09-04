import { test, expect } from '@playwright/test';

test('Verify User Can Login Via Okta', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Identify the Okta login option using the stable selector
  const oktaLoginButton = page.locator("//a[@href='https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'okta')]");

  // Step 3: Click the Okta login button
  try {
    await oktaLoginButton.click();
    console.log('Clicked Okta login button');
  } catch (error) {
    console.error('Error clicking Okta login button:', error);
    throw error;
  }

  // Step 4: Verify that the Okta authentication page is loaded
  try {
    await page.waitForURL('https://dev-53854943.okta.com/*');
    console.log('Navigated to Okta authentication page');
  } catch (error) {
    console.error('Failed to navigate to Okta authentication page:', error);
    throw error;
  }

  // Step 5: Enter valid Okta credentials
  try {
    await page.locator('input[name="username"]').fill('your_username');
    await page.locator('input[name="password"]').fill('your_password');
    console.log('Filled Okta credentials');
  } catch (error) {
    console.error('Error filling Okta credentials:', error);
    throw error;
  }

  // Step 6: Submit the Okta authentication form
  try {
    await page.locator('input[type="submit"]').click();
    console.log('Submitted Okta authentication form');
  } catch (error) {
    console.error('Error submitting Okta authentication form:', error);
    throw error;
  }

  // Step 7: Confirm redirection to the RoostGPT dashboard
  try {
    await page.waitForURL('https://dev.roost.ai/roostgpt/tests');
    console.log('Redirected to RoostGPT dashboard');
  } catch (error) {
    console.error('Failed to redirect to RoostGPT dashboard:', error);
    throw error;
  }

  // Step 8: Verify correct user profile information on the dashboard
  try {
    const userProfile = page.locator('.user-profile'); // Adjust selector as needed
    await expect(userProfile).toBeVisible();
    console.log('User profile information is visible');
  } catch (error) {
    console.error('Error verifying user profile information:', error);
    throw error;
  }

  // Step 9: Log out after verifying the session
  try {
    const logoutButton = page.locator('button:has-text("Log Out")'); // Adjust selector as needed
    await logoutButton.click();
    console.log('Logged out successfully');
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
});