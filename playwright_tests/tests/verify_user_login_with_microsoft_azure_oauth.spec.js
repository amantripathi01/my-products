import { test, expect } from '@playwright/test';

test('Verify User Login with Microsoft Azure OAuth', async ({ page }) => {
  // Step 1: Launch the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Click on the 'Sign in with Microsoft' link
  try {
    const signInWithMicrosoftLink = page.locator("//a[@href='https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code&scope=user.read&state=azure&client_id=946156a9-5142-4469-b79f-bdcc9e76cf7f&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'azure')]");
    await signInWithMicrosoftLink.click();
    console.log('Clicked on Sign in with Microsoft link');
  } catch (error) {
    console.error('Error clicking Sign in with Microsoft link:', error);
    throw error;
  }

  // Step 3: Enter Microsoft account email on the login page
  try {
    await page.waitForNavigation();
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('your-email@example.com');
    await emailInput.press('Enter');
    console.log('Filled Microsoft account email and submitted');
  } catch (error) {
    console.error('Error entering Microsoft account email:', error);
    throw error;
  }

  // Step 4: Submit the password and proceed
  try {
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill('your-password');
    await passwordInput.press('Enter');
    console.log('Filled password and submitted');
  } catch (error) {
    console.error('Error entering password:', error);
    throw error;
  }

  // Step 5: Complete the Microsoft multi-factor authentication if prompted
  try {
    const mfaInput = page.locator('input[type="tel"]');
    if (await mfaInput.count() > 0) {
      await mfaInput.fill('123456'); // Replace with actual MFA code
      await mfaInput.press('Enter');
      console.log('Completed MFA');
    }
  } catch (error) {
    console.error('Error during MFA:', error);
    throw error;
  }

  // Step 6: Verify redirection to https://dev.roost.ai
  try {
    await page.waitForNavigation();
    await expect(page).toHaveURL('https://dev.roost.ai');
    console.log('Successfully redirected to https://dev.roost.ai');
  } catch (error) {
    console.error('Redirection to dashboard failed:', error);
    throw error;
  }

  // Step 7: Check for user profile visibility on the dashboard
  try {
    const userProfile = page.locator('.user-profile'); // Adjust selector based on actual implementation
    await expect(userProfile).toBeVisible();
    console.log('User profile is visible on the dashboard');
  } catch (error) {
    console.error('User profile not visible:', error);
    throw error;
  }
});