import { test, expect } from '@playwright/test';

test('Verify Test Case Creation and Execution', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT test dashboard
  await page.goto('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');

  // Step 2: Click on 'Create New Test Case' button
  await page.locator('//a[@href=\'/gptCLIForm\' and contains(@class, \'nav-link\')]').click();

  // Step 3: Enter the test case name and description
  await page.locator('input[name="testCaseName"]').fill('Sample Test Case');
  await page.locator('textarea[name="description"]').fill('This is a description for the sample test case.');

  // Step 4: Select the application under test from the dropdown
  await page.locator('select[name="application"]').selectOption('sampleApp');

  // Step 5: Add test steps by clicking 'Add Step' and filling in the details
  await page.locator('button:has-text("Add Step")').click();
  await page.locator('input[name="stepName"]').fill('Step 1');
  await page.locator('textarea[name="stepDescription"]').fill('Open the dashboard.');

  // Step 6: Save the test case
  await page.locator('button:has-text("Save")').click();

  // Step 7: Navigate back to the test case list
  await page.goto('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');

  // Step 8: Locate the newly created test case and click 'Execute'
  await page.locator('tr:has-text("Sample Test Case") button:has-text("Execute")').click();

  // Step 9: Select the environment for test execution
  await page.locator('select[name="environment"]').selectOption('staging');

  // Step 10: Confirm execution by clicking 'Run Test'
  await page.locator('button:has-text("Run Test")').click();

  // Step 11: Monitor the test execution process for completion
  await page.waitForSelector('text=Test execution completed', { timeout: 120000 });

  // Step 12: Upon completion, navigate to the test results section
  await page.locator('a:has-text("View Results")').click();

  // Step 13: Review the test outcome and logs
  await expect(page.locator('div.test-results')).toBeVisible();
  await expect(page.locator('div.test-results')).toContainText('Test execution completed');

  // Step 14: Check for any errors or failures in the execution
  const errorCount = await page.locator('div.test-results:has-text("Error")').count();
  expect(errorCount).toBe(0);

  // Step 15: Return to the test case list
  await page.goto('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');
});