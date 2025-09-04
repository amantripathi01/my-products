const { test, expect } = require('@playwright/test');

test('Ensure Proper Functionality of External API Links', async ({ page, context }) => {
  // Step 1: Navigate to the API documentation page
  await page.goto('https://dev.roost.ai/docs/api');
  await expect(page).toHaveURL('https://dev.roost.ai/docs/api');
  console.log('Navigated to API documentation page');

  // Step 2: Identify the external link to Swagger API documentation
  const swaggerLink = page.locator("//a[@href='https://dev.roost.ai/api/swagger' and contains(@class, 'roost-icon')]");
  await expect(swaggerLink).toBeVisible();
  console.log('Swagger API link identified');

  // Step 3: Click on the external link to verify it opens in a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    swaggerLink.click()
  ]);
  console.log('External link clicked, new tab opened');

  // Step 4: Ensure the new tab loads the Swagger API documentation page correctly
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://dev.roost.ai/api/swagger');
  console.log('Swagger API documentation page loaded in new tab');

  // Step 5: Check that the link provides the correct and expected content
  await expect(newPage.locator('body')).toContainText('Swagger');
  console.log('Correct content found on Swagger page');

  // Step 6: Verify the presence of a return link to the original documentation page
  const returnLink = newPage.locator('a', { hasText: 'Return to API Documentation' });
  await expect(returnLink).toBeVisible();
  console.log('Return link to original documentation page is visible');

  // Step 7: Close the tab and return to the API documentation page
  await newPage.close();
  await expect(page).toHaveURL('https://dev.roost.ai/docs/api');
  console.log('Closed Swagger tab and returned to API documentation page');

  // Step 8: Check that the original page state is maintained after returning
  await expect(page.locator("//a[@href='https://dev.roost.ai/api/swagger' and contains(@class, 'roost-icon')]")).toBeVisible();
  console.log('Original page state is maintained');

  // Error handling and performance monitoring
  try {
    const performanceStart = Date.now();
    await page.reload();
    const performanceEnd = Date.now();
    console.log(`Page reload completed in ${performanceEnd - performanceStart} ms`);
  } catch (error) {
    console.error('Error during page reload:', error);
  }
});