const { test, expect } = require('@playwright/test');

test('Test Multilingual Support in Chatbot', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT page
  await page.goto('https://dev.roost.ai/roostgpt');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt');

  // Step 2: Log in using any available OAuth option
  try {
    const oauthButton = page.locator('button:has-text("Log in with")'); // Adjust selector based on actual OAuth button text
    await oauthButton.click();
    await page.waitForNavigation(); // Wait for the OAuth process to complete
    console.log('Logged in using OAuth');
  } catch (error) {
    console.error('Error during OAuth login:', error);
    throw error;
  }

  // Step 3: Initiate a conversation by entering a query in English
  try {
    await page.locator('input[type="text"]').fill('Hello, how are you?');
    await page.locator('button:has-text("Send")').click(); // Adjust selector for the send button
    console.log('Sent query in English');
  } catch (error) {
    console.error('Error sending query in English:', error);
    throw error;
  }

  // Step 4: Observe the chatbot's response in English
  try {
    const response = await page.locator('.chatbot-response'); // Adjust selector based on actual response element
    await expect(response).toContainText('I am fine, thank you!');
    console.log('Received response in English');
  } catch (error) {
    console.error('Error verifying response in English:', error);
    throw error;
  }

  // Step 5: Switch language to Spanish using the language selection option
  try {
    await page.locator('button:has-text("Language")').click(); // Adjust selector for the language button
    await page.locator('button:has-text("Español")').click(); // Adjust selector for Spanish language option
    console.log('Switched language to Spanish');
  } catch (error) {
    console.error('Error switching to Spanish:', error);
    throw error;
  }

  // Step 6: Enter a query in Spanish
  try {
    await page.locator('input[type="text"]').fill('Hola, ¿cómo estás?');
    await page.locator('button:has-text("Send")').click();
    console.log('Sent query in Spanish');
  } catch (error) {
    console.error('Error sending query in Spanish:', error);
    throw error;
  }

  // Step 7: Verify the chatbot responds correctly in Spanish
  try {
    const response = await page.locator('.chatbot-response');
    await expect(response).toContainText('Estoy bien, ¡gracias!');
    console.log('Received response in Spanish');
  } catch (error) {
    console.error('Error verifying response in Spanish:', error);
    throw error;
  }

  // Step 8: Switch to a third language, such as French
  try {
    await page.locator('button:has-text("Language")').click();
    await page.locator('button:has-text("Français")').click();
    console.log('Switched language to French');
  } catch (error) {
    console.error('Error switching to French:', error);
    throw error;
  }

  // Step 9: Enter a query in French
  try {
    await page.locator('input[type="text"]').fill('Bonjour, comment ça va?');
    await page.locator('button:has-text("Send")').click();
    console.log('Sent query in French');
  } catch (error) {
    console.error('Error sending query in French:', error);
    throw error;
  }

  // Step 10: Ensure the chatbot responds in French
  try {
    const response = await page.locator('.chatbot-response');
    await expect(response).toContainText('Je vais bien, merci!');
    console.log('Received response in French');
  } catch (error) {
    console.error('Error verifying response in French:', error);
    throw error;
  }

  // Step 11: Check if language switching retains conversation history
  try {
    const conversationHistory = await page.locator('.conversation-history'); // Adjust selector for conversation history
    await expect(conversationHistory).toBeVisible();
    console.log('Verified conversation history is retained across languages');
  } catch (error) {
    console.error('Error verifying conversation history:', error);
    throw error;
  }

  // Step 12: Log out from the application
  try {
    await page.locator('button:has-text("Log out")').click(); // Adjust selector for the logout button
    await page.waitForNavigation(); // Wait for the logout process to complete
    console.log('Logged out from the application');
  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
});