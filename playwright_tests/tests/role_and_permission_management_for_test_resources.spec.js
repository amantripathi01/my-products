const { test, expect } = require('@playwright/test');

test('Role and Permission Management for Test Resources', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT Test Dashboard
  await page.goto('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');
  console.log('Navigated to RoostGPT Test Dashboard');

  try {
    // Step 2: Access the user management section
    const userManagementLink = page.locator('a', { hasText: 'User Management' });
    await userManagementLink.click();
    await page.waitForNavigation();
    console.log('Accessed user management section');

    // Step 3: Select a user to assign or modify roles
    const userRow = page.locator('tr', { hasText: 'testuser@example.com' });
    await userRow.click();
    console.log('Selected user for role modification');

    // Step 4: Review current roles and permissions assigned to the user
    const currentRoles = await page.locator('.current-roles').textContent();
    console.log('Current roles:', currentRoles);

    // Step 5: Modify the roles and permissions as per the requirements
    const roleDropdown = page.locator('select#role-dropdown');
    await roleDropdown.selectOption('new-role');
    console.log('Modified roles and permissions');

    // Step 6: Save the changes and verify the update
    const saveButton = page.locator('button', { hasText: 'Save Changes' });
    await saveButton.click();
    await page.waitForNavigation();
    const successMessage = page.locator('.success-message');
    await expect(successMessage).toBeVisible();
    console.log('Changes saved and verified');

    // Step 7: Log in as the user to verify access permissions
    await page.goto('https://dev.roost.ai/roostgpt/login');
    await page.locator('input[name="email"]').fill('testuser@example.com');
    await page.locator('input[name="password"]').fill('password123');
    await page.locator('button[type="submit"]').click();
    await page.waitForNavigation();
    console.log('Logged in as the modified user');

    // Step 8: Test restricted and unrestricted access to test resources
    const restrictedResource = page.locator('.restricted-resource');
    const unrestrictedResource = page.locator('.unrestricted-resource');
    await expect(restrictedResource).not.toBeVisible();
    await expect(unrestrictedResource).toBeVisible();
    console.log('Verified access permissions');

    // Step 9: Log out and repeat the process to assign roles to another user
    await page.locator('button', { hasText: 'Log Out' }).click();
    await page.waitForNavigation();
    console.log('Logged out successfully');

    // Step 10: Verify that changes are reflected in user access logs
    await page.goto('https://dev.roost.ai/roostgpt/access-logs');
    const logEntry = page.locator('.log-entry', { hasText: 'testuser@example.com' });
    await expect(logEntry).toContainText('Role updated');
    console.log('Verified changes in access logs');

    // Step 11: Log out of the platform
    await page.goto('https://dev.roost.ai/roostgpt/logout');
    await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/logout');
    console.log('Logged out of the platform');
  } catch (error) {
    console.error('Error during role and permission management test:', error);
    // Take screenshot on error
    await page.screenshot({ path: 'error-screenshot.png' });
    throw error;
  }
});