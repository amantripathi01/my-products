const { test, expect } = require('@playwright/test');

test('Verify Navigation to Privacy Policy', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Scroll to the footer section
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  console.log('Scrolled to the footer section');

  // Step 3: Verify the presence of the 'Privacy Policy' link
  const privacyPolicyLink = page.locator('//a[@href="https://roost.ai/privacy-policy" and contains(@class, "footer-item")]');
  await expect(privacyPolicyLink).toBeVisible();
  console.log('Verified presence of the Privacy Policy link');

  // Step 4: Click on the 'Privacy Policy' link
  await privacyPolicyLink.click();
  console.log('Clicked the Privacy Policy link');

  // Step 5: Check that the Privacy Policy page loads correctly
  await page.waitForURL('https://roost.ai/privacy-policy');
  await expect(page).toHaveURL('https://roost.ai/privacy-policy');
  console.log('Privacy Policy page loaded correctly');

  // Step 6: Verify the content of the Privacy Policy page is visible and readable
  const content = page.locator('body');
  await expect(content).toBeVisible();
  console.log('Privacy Policy content is visible and readable');

  // Step 7: Check for any multimedia content on the Privacy Policy page
  const multimediaContent = page.locator('video, img, [role="img"]');
  if (await multimediaContent.count() > 0) {
    console.log('Multimedia content found on the Privacy Policy page');
  } else {
    console.log('No multimedia content found on the Privacy Policy page');
  }

  // Step 8: Navigate back to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  console.log('Navigated back to the login page');

  // Step 9: Ensure the footer section is visible upon return to the login page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(privacyPolicyLink).toBeVisible();
  console.log('Footer section is visible upon return to the login page');
});