import { test, expect } from '@playwright/test';

test('Verify Creation and Execution of Test Cases', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT Test Dashboard
  await page.goto('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');

  // Step 2: Click on the link to navigate to the test case creation section
  try {
    const createTestPlanLink = page.locator("//a[@href='#tag/RoostGPT/operation/TestGptController_createTestPlan' and contains(@class, 'sc-jlZhew')]");
    await createTestPlanLink.click();
    console.log('Navigated to test case creation section');
  } catch (error) {
    console.error('Error clicking on the test case creation link:', error);
    throw error;
  }

  // Step 3: Click on the button to open the test case creation form
  try {
    const createTestButton = page.locator("//button[normalize-space()='POST\\n/test/createTestPlan']");
    await createTestButton.click();
    console.log('Opened test case creation form');
  } catch (error) {
    console.error('Error clicking on the test case creation button:', error);
    throw error;
  }

  // Step 4: Fill out the test case details
  try {
    await page.locator('input[name="testCaseName"]').fill('Sample Test Case');
    await page.locator('textarea[name="description"]').fill('This is a sample test case description.');
    await page.locator('textarea[name="steps"]').fill('Step 1: Do this\nStep 2: Do that');
    console.log('Filled test case details');
  } catch (error) {
    console.error('Error filling test case details:', error);
    throw error;
  }

  // Step 5: Submit the test case creation form
  try {
    await page.locator('button[type="submit"]').click();
    console.log('Submitted test case creation form');
  } catch (error) {
    console.error('Error submitting the test case creation form:', error);
    throw error;
  }

  // Step 6: Verify that the test case appears in the test case list
  try {
    await page.waitForSelector('text=Sample Test Case');
    console.log('Test case appears in the list');
  } catch (error) {
    console.error('Test case not found in the list:', error);
    throw error;
  }

  // Step 7: Navigate to the test execution section
  try {
    await page.locator("//a[@href='#tag/RoostGPT/operation/TestGptController_getAllTestPlan']").click();
    console.log('Navigated to test execution section');
  } catch (error) {
    console.error('Error navigating to test execution section:', error);
    throw error;
  }

  // Step 8: Select the newly created test case
  try {
    await page.locator('text=Sample Test Case').click();
    console.log('Selected newly created test case');
  } catch (error) {
    console.error('Error selecting the test case:', error);
    throw error;
  }

  // Step 9: Execute the test case
  try {
    const executeTestButton = page.locator("//button[normalize-space()='GET\\n/test']");
    await executeTestButton.click();
    console.log('Executed the test case');
  } catch (error) {
    console.error('Error executing the test case:', error);
    throw error;
  }

  // Step 10: Wait for test execution to complete
  await page.waitForTimeout(5000);

  // Step 11: Verify that the test results are displayed
  try {
    await page.waitForSelector('text=Test Results');
    console.log('Test results are displayed');
  } catch (error) {
    console.error('Test results not displayed:', error);
    throw error;
  }

  // Step 12: Analyze the test results
  // Assuming analysis involves checking for specific issues in the results
  try {
    const results = page.locator('text=Test Results');
    await expect(results).toContainText('Success');
    console.log('Analyzed test results');
  } catch (error) {
    console.error('Error analyzing test results:', error);
    throw error;
  }

  // Step 13: Navigate to the historical data section
  try {
    await page.locator('text=Historical Data').click();
    console.log('Navigated to historical data section');
  } catch (error) {
    console.error('Error navigating to historical data section:', error);
    throw error;
  }

  // Step 14: Verify that the historical data includes the latest test run
  try {
    await page.waitForSelector('text=Sample Test Case');
    console.log('Historical data includes the latest test run');
  } catch (error) {
    console.error('Latest test run not found in historical data:', error);
    throw error;
  }

  // Step 15: Log out of the platform
  try {
    await page.locator('text=Log Out').click();
    await page.waitForURL('https://dev.roost.ai/roostgpt/login');
    console.log('Logged out successfully');
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
});