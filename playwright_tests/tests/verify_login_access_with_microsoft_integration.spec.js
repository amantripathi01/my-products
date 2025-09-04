const { test, expect } = require('@playwright/test');

test('Verify Login Access with Microsoft Integration', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Locate and verify the presence of the Microsoft sign-in button
  const microsoftSignInButton = page.locator("//a[@href='https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code&scope=user.read&state=azure&client_id=946156a9-5142-4469-b79f-bdcc9e76cf7f&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'azure')]");
  await expect(microsoftSignInButton).toBeVisible();

  // Step 3: Click on the Microsoft sign-in button
  await microsoftSignInButton.click();

  // Step 4: Redirect to Microsoft's authentication page
  // Note: Replace 'expected_microsoft_url' with the actual Microsoft URL you expect
  await page.waitForURL('https://login.microsoftonline.com/*');
  
  // Step 5: Enter valid Microsoft account credentials
  // Replace 'input[type="email"]' and 'input[type="password"]' with actual Microsoft login form selectors
  await page.fill('input[type="email"]', 'your-email@example.com');
  await page.click('input[type="submit"]');
  await page.fill('input[type="password"]', 'your-password');
  await page.click('input[type="submit"]');

  // Step 6: Submit the Microsoft login form
  // Wait for redirection back to Roost dashboard
  await page.waitForURL('https://dev.roost.ai/dashboard');
  await expect(page).toHaveURL('https://dev.roost.ai/dashboard');

  // Step 7: Verify the user is logged in by checking for user profile elements
  const userProfileElement = page.locator('.user-profile'); // Replace with actual selector
  await expect(userProfileElement).toBeVisible();

  // Step 8: Log out from the Roost platform
  const logoutButton = page.locator('.logout-button'); // Replace with actual selector
  await logoutButton.click();
  
  // Step 9: Ensure the user is redirected back to the login page post logout
  await expect(page).toHaveURL('https://dev.roost.ai/login');
});