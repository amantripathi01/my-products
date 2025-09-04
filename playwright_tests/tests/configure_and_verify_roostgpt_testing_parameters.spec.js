import { test, expect } from '@playwright/test';

test('Configure and Verify RoostGPT Testing Parameters', async ({ page }) => {
  try {
    // Step 1: Navigate to the RoostGPT Config page
    await page.goto('https://dev.roost.ai/gptCLIForm');
    await expect(page).toHaveURL('https://dev.roost.ai/gptCLIForm');

    // Step 2: Locate the Roost Token input field and type a valid token
    const roostTokenInput = page.locator('//div[@id="roostToken"]/div[2]/div/div[2]/div/input');
    await roostTokenInput.fill('VALID_ROOST_TOKEN'); // Replace with an actual valid token

    // Step 3: Select 'Unit Test' from the Test Type dropdown
    await page.locator('select#testType').selectOption('Unit Test');

    // Step 4: Select 'Java' from the Code Language dropdown
    await page.locator('select#codeLanguage').selectOption('Java');

    // Step 5: Select 'JUnit5' from the Test Framework dropdown
    await page.locator('select#testFramework').selectOption('JUnit5');

    // Step 6: Select 'Java SE 21(Default)' from the Java Version dropdown
    await page.locator('select#javaVersion').selectOption('Java SE 21(Default)');

    // Step 7: Select 'Maven' from the Java Build Tool dropdown
    await page.locator('select#javaBuildTool').selectOption('Maven');

    // Step 8: Select 'Maven 3.8.6 (Default)' from the Maven Version dropdown
    await page.locator('select#mavenVersion').selectOption('Maven 3.8.6 (Default)');

    // Step 9: Locate and click the Verify button
    await page.locator('button#verifyButton').click();

    // Step 10: Observe any confirmation or error messages
    const confirmationMessage = page.locator('text=Configuration verified successfully');
    await expect(confirmationMessage).toBeVisible();

    // Step 11: Ensure the test configuration is saved and accurately reflected in the UI
    await expect(roostTokenInput).toHaveValue('VALID_ROOST_TOKEN');

    // Step 12: Verify that no error messages are displayed on incorrect inputs
    const errorMessage = page.locator('text=Error');
    await expect(errorMessage).not.toBeVisible();

    // Step 13: Check the persistence of settings by refreshing the page
    await page.reload();
    await expect(roostTokenInput).toHaveValue('VALID_ROOST_TOKEN');
    await expect(page.locator('select#testType')).toHaveValue('Unit Test');
    await expect(page.locator('select#codeLanguage')).toHaveValue('Java');
    await expect(page.locator('select#testFramework')).toHaveValue('JUnit5');
    await expect(page.locator('select#javaVersion')).toHaveValue('Java SE 21(Default)');
    await expect(page.locator('select#javaBuildTool')).toHaveValue('Maven');
    await expect(page.locator('select#mavenVersion')).toHaveValue('Maven 3.8.6 (Default)');

    // Step 14: Re-confirm the configuration is correctly saved
    await page.locator('button#verifyButton').click();
    await expect(confirmationMessage).toBeVisible();

  } catch (error) {
    console.error('Error during test execution:', error);
    await page.screenshot({ path: 'error-screenshot.png' });
    throw error;
  }
});