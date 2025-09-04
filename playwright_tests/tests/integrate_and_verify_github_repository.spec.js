const { test, expect } = require('@playwright/test');

test('Integrate and Verify GitHub Repository', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT Config page
  await page.goto('https://dev.roost.ai/gptCLIForm');
  await expect(page).toHaveURL('https://dev.roost.ai/gptCLIForm');
  
  // Step 2: Locate the Github Token input field
  const tokenInput = page.locator('[data-testid="github-source-token"]');
  await expect(tokenInput).toBeVisible();

  // Step 3: Type a valid Github Token into the input field
  const validToken = 'your-valid-github-token';
  await tokenInput.fill(validToken);

  // Step 4: Select 'Cloud' from the Github Type options
  const githubTypeSelect = page.locator('select[name="githubType"]');
  await githubTypeSelect.selectOption('Cloud');

  // Step 5: Locate the Verify button next to the Github Token input
  const verifyButton = page.locator('button:has-text("Verify")');
  await expect(verifyButton).toBeVisible();

  // Step 6: Click the Verify button to validate the token
  await verifyButton.click();
  await page.waitForNavigation();

  // Step 7: Observe the confirmation message indicating successful integration
  const confirmationMessage = page.locator('text=Integration successful');
  await expect(confirmationMessage).toBeVisible();

  // Step 8: Verify that the repository integration is visible in the UI
  const integrationStatus = page.locator('text=Repository integrated');
  await expect(integrationStatus).toBeVisible();

  // Step 9: Check for error messages on incorrect token input
  const invalidToken = 'invalid-github-token';
  await tokenInput.fill(invalidToken);
  await verifyButton.click();
  const errorMessage = page.locator('text=Invalid token');
  await expect(errorMessage).toBeVisible();

  // Step 10: Ensure the token is masked while typing
  const unmaskIcon = page.locator('[data-testid="github-source-token-unMask-icon"]');
  await unmaskIcon.click();
  await expect(tokenInput).toHaveAttribute('type', 'text');
  await unmaskIcon.click(); // Mask it back
  await expect(tokenInput).toHaveAttribute('type', 'password');

  // Step 11: Attempt integration with an expired token
  const expiredToken = 'expired-github-token';
  await tokenInput.fill(expiredToken);
  await verifyButton.click();
  const expiredErrorMessage = page.locator('text=Token expired');
  await expect(expiredErrorMessage).toBeVisible();

  // Step 12: Validate error handling for network issues during verification
  // Simulate network failure and check for handling
  page.route('**/github-api/verify', route => route.abort());
  await verifyButton.click();
  const networkErrorMessage = page.locator('text=Network error');
  await expect(networkErrorMessage).toBeVisible();
  page.unroute('**/github-api/verify');

  // Step 13: Refresh the page to ensure persistence of integration settings
  await page.reload();
  await expect(integrationStatus).toBeVisible();
  
  // Step 14: Verify integration using different GitHub account tokens
  const anotherValidToken = 'another-valid-github-token';
  await tokenInput.fill(anotherValidToken);
  await verifyButton.click();
  await page.waitForNavigation();
  await expect(confirmationMessage).toBeVisible();

  // Step 15: Check the UI updates correctly post verification
  const updatedStatus = page.locator('text=Integration updated');
  await expect(updatedStatus).toBeVisible();
});