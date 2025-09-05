import { test, expect } from '@playwright/test';

test('Verify User Addition to Project via Admin Interface', async ({ page }) => {
  // Step 1: Visit the login page at dev.roost.ai
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Click on the 'okta' link to initiate authentication
  try {
    const oktaLink = page.locator('html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > div > div > ul > li:nth-of-type(4) > a.okta');
    await oktaLink.click();
    await page.waitForURL('https://dev-53854943.okta.com/');
  } catch (error) {
    console.error('Failed to click on the okta link or navigate to Okta login page:', error);
    throw error;
  }

  // Step 3: Enter login credentials and sign in
  try {
    await page.locator('input#okta-signin-username').fill('Playwright@zb.io');
    await page.locator('input#okta-signin-password').fill('Roost#123');
    await page.locator('input#okta-signin-submit').click();
    await page.waitForNavigation();
  } catch (error) {
    console.error('Error during login process:', error);
    throw error;
  }

  // Step 4: Verify successful login and navigation to the dashboard page
  try {
    await page.waitForURL('https://dev.roost.ai/roostgpt/tests');
  } catch (error) {
    console.error('Failed to verify navigation to the dashboard page:', error);
    throw error;
  }

  // Step 5: Click on the 'Admin' tab to access admin features
  try {
    const adminTab = page.locator('a.nav-link[data-testid="admin-tab"]');
    await adminTab.click();
    await page.waitForURL('https://dev.roost.ai/admin/app');
  } catch (error) {
    console.error('Failed to click on the Admin tab or navigate to admin section:', error);
    throw error;
  }

  // Step 6: Click on 'Add Roosters' to open the user addition interface
  try {
    const addRoostersButton = page.locator('div:has-text("Add Roosters")');
    await addRoostersButton.click();
  } catch (error) {
    console.error('Failed to open the user addition interface:', error);
    throw error;
  }

  // Step 7: Enter 'playwright' in the invite field
  try {
    const inviteField = page.locator('input#inviteMemberDropdown');
    await inviteField.fill('playwright');

    // Select 'playwright' from the dropdown list
    const dropdownOption = page.locator('div:has-text("playwright")');
    await dropdownOption.click();

    // Click 'Add to <project_name>' to complete the process
    const addToProjectButton = page.locator('div:has-text("Add to <project_name>")');
    await addToProjectButton.click();
  } catch (error) {
    console.error('Error during user addition process:', error);
    throw error;
  }

  // Step 8: Verify that the user is added successfully
  try {
    const successMessage = page.locator('text=User successfully added');
    await expect(successMessage).toBeVisible();
  } catch (error) {
    console.error('Failed to verify user addition:', error);
    throw error;
  }
});