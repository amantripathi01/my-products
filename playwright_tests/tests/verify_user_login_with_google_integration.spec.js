import { test, expect } from '@playwright/test';

test('Verify User Login with Google Integration', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Verify the presence of the Google sign-in button
  const googleSignInButton = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");
  await expect(googleSignInButton).toBeVisible();

  // Step 3: Click on the Google sign-in button
  await googleSignInButton.click();

  // Step 4: Redirect to Google's authentication page
  await page.waitForURL('https://accounts.google.com/*');

  // Step 5: Enter valid Google credentials (email and password)
  const emailInput = page.locator('input[type="email"]');
  await emailInput.fill('your-email@gmail.com');
  await page.locator('button:has-text("Next")').click();
  await page.waitForSelector('input[type="password"]', { timeout: 10000 });
  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.fill('your-password');
  
  // Step 6: Submit the Google login form
  await page.locator('button:has-text("Next")').click();

  // Step 7: Wait for redirection back to the Roost Enterprise dashboard
  await page.waitForURL('https://dev.roost.ai/dashboard');

  // Step 8: Verify successful login by checking for a welcome message or user profile icon
  const userProfileIcon = page.locator('img[alt="User Profile"]');
  await expect(userProfileIcon).toBeVisible();

  // Step 9: Log out of the Roost Enterprise platform
  const logoutButton = page.locator('button:has-text("Sign out")');
  await logoutButton.click();

  // Step 10: Verify that the user is redirected back to the login page
  await page.waitForURL('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
});