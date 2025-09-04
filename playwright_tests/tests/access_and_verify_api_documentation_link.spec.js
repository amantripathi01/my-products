const { test, expect } = require('@playwright/test');

test('Access and Verify API Documentation Link', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  console.log('Navigated to the login page');

  // Step 2: Scroll down to the footer section
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  console.log('Scrolled to the footer section');

  // Step 3: Verify the presence of the 'Documentation' link
  const documentationLink = page.locator("//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]");
  await expect(documentationLink).toBeVisible();
  console.log('Verified presence of the "Documentation" link');

  // Step 4: Click on the 'Documentation' link
  try {
    await documentationLink.click();
    console.log('Clicked on the "Documentation" link');
  } catch (error) {
    console.error('Error clicking the documentation link:', error);
    throw error;
  }

  // Step 5: Wait for the redirection to the API Documentation page
  await page.waitForURL('https://docs.roost.ai');
  console.log('Redirected to the API Documentation page');

  // Step 6: Verify that the API Documentation page loads successfully
  await expect(page).toHaveURL('https://docs.roost.ai');
  console.log('API Documentation page loaded successfully');

  // Step 7: Check for the presence of introductory content on the API Documentation page
  const introContent = page.locator('h1, h2, p').first();
  await expect(introContent).toBeVisible();
  console.log('Verified introductory content is visible on the documentation page');

  // Step 8: Verify the availability of search functionality on the documentation page
  const searchInput = page.locator('input[type="search"], input[placeholder*="search" i]');
  await expect(searchInput).toBeVisible();
  console.log('Search functionality is available on the documentation page');

  // Step 9: Navigate back to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  console.log('Navigated back to the login page');

  // Step 10: Ensure the footer items reappear upon returning to the login page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(documentationLink).toBeVisible();
  console.log('Footer items are visible again on the login page');
});