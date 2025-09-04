import { test, expect } from '@playwright/test';

test('Review and Analyze Test Reports', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT platform login page
  await page.goto('https://dev.roost.ai/roostgpt/tests');

  // Step 2: Log into the RoostGPT platform
  try {
    const loginButton = page.locator('button:has-text("Log In")');
    if (await loginButton.count() > 0) {
      await loginButton.click();
      console.log('Clicked Log In button');
    }
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }

  // Step 3: Navigate to the test reports section
  try {
    const reportsLink = page.locator('//a[@href="/gptCLIForm" and contains(@class, "nav-link")]', { hasText: 'RoostGPT Config' });
    await reportsLink.click();
    console.log('Navigated to the test reports section');
  } catch (error) {
    console.error('Error navigating to test reports section:', error);
    throw error;
  }

  // Step 4: Select a recent test run from the reports list
  try {
    const recentTestRun = page.locator('tr:has(td):first-child');
    await recentTestRun.click();
    console.log('Selected a recent test run');
  } catch (error) {
    console.error('Error selecting recent test run:', error);
    throw error;
  }

  // Step 5: Review the summary of the test results
  try {
    const summarySection = page.locator('section#summary');
    await expect(summarySection).toBeVisible();
    console.log('Reviewed the summary of the test results');
  } catch (error) {
    console.error('Error reviewing summary of test results:', error);
    throw error;
  }

  // Step 6: Access detailed logs for failed test steps
  try {
    const failedLogsButton = page.locator('button:has-text("Failed Logs")');
    await failedLogsButton.click();
    console.log('Accessed detailed logs for failed test steps');
  } catch (error) {
    console.error('Error accessing detailed logs:', error);
    throw error;
  }

  // Step 7: Identify patterns or recurring issues in the logs
  try {
    const logsSection = page.locator('div#logs');
    await expect(logsSection).toContainText('Error');
    console.log('Identified patterns or recurring issues in the logs');
  } catch (error) {
    console.error('Error identifying issues in the logs:', error);
    throw error;
  }

  // Step 8: Export the report to a CSV or PDF format
  try {
    const exportButton = page.locator('button:has-text("Export")');
    await exportButton.click();
    console.log('Exported the report to a CSV or PDF format');
  } catch (error) {
    console.error('Error exporting the report:', error);
    throw error;
  }

  // Step 9: Share the report with the development team
  try {
    const shareButton = page.locator('button:has-text("Share")');
    await shareButton.click();
    console.log('Shared the report with the development team');
  } catch (error) {
    console.error('Error sharing the report:', error);
    throw error;
  }

  // Step 10: Schedule a meeting to discuss findings
  try {
    const scheduleMeetingButton = page.locator('button:has-text("Schedule Meeting")');
    await scheduleMeetingButton.click();
    console.log('Scheduled a meeting to discuss findings');
  } catch (error) {
    console.error('Error scheduling a meeting:', error);
    throw error;
  }

  // Step 11: Log any new issues discovered during analysis
  try {
    const logIssueButton = page.locator('button:has-text("Log Issue")');
    await logIssueButton.click();
    console.log('Logged any new issues discovered during analysis');
  } catch (error) {
    console.error('Error logging new issues:', error);
    throw error;
  }
});