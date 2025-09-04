import { test, expect } from '@playwright/test';

test('Verify User Can Login Via Google', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  
  // Step 2: Verify the page loaded correctly
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  
  // Step 3: Locate and click the Google login button using the provided XPath selector
  const googleLoginButton = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");
  
  // Ensure the Google login button is visible and clickable
  await expect(googleLoginButton).toBeVisible();
  
  // Step 4: Click the Google login button
  await googleLoginButton.click();
  
  // Step 5: Verify that the Google authentication page is displayed
  await page.waitForURL('**/accounts.google.com/**');
  await expect(page).toHaveURL(/.*accounts\.google\.com.*/);
  
  // Step 6: Enter valid Google credentials
  // Note: Replace 'your-email@gmail.com' and 'your-password' with actual credentials or use environment variables
  await page.fill('input[type="email"]', 'your-email@gmail.com');
  await page.locator('button:has-text("Next")').click();

  // Wait for password field and enter password
  await page.waitForSelector('input[type="password"]', { state: 'visible' });
  await page.fill('input[type="password"]', 'your-password');
  await page.locator('button:has-text("Next")').click();
  
  // Step 7: Verify redirection to the main dashboard
  await page.waitForURL('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');
  
  // Step 8: Check that the user's profile information is displayed correctly
  const userProfile = page.locator('.user-profile'); // Adjust the selector to match the actual profile element
  await expect(userProfile).toBeVisible();
  
  // Step 9: Log out to complete the session
  const logoutButton = page.locator('button:has-text("Logout")'); // Adjust the selector as necessary
  await logoutButton.click();
  await page.waitForURL('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  
  console.log('Test completed: User successfully logged in and logged out via Google authentication.');
});