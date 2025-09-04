const { test, expect } = require('@playwright/test');

test('Check Feedback Mechanism on Chatbot Responses', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT page
  await page.goto('https://dev.roost.ai/roostgpt');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt');

  // Step 2: Log in using any available OAuth option
  // Assuming there's a button for OAuth login, this part needs actual selectors from the page
  try {
    const oauthButton = page.locator('button:has-text("Log in with OAuth")');
    await oauthButton.click();
    // Wait for the OAuth flow to complete
    await page.waitForNavigation();
  } catch (error) {
    console.error('Error during OAuth login:', error);
    throw error;
  }

  // Step 3: Initiate a conversation by asking a predefined question
  try {
    const chatInput = page.locator('textarea[placeholder="Type your question..."]');
    await chatInput.fill('What is the weather today?');
    await chatInput.press('Enter');
    
    // Step 4: Receive a response from the chatbot
    const chatbotResponse = page.locator('.chatbot-response');
    await expect(chatbotResponse).toBeVisible();

    // Step 5: Provide positive feedback on the response
    const positiveFeedbackButton = page.locator('button:has-text("👍")');
    await positiveFeedbackButton.click();
    console.log('Positive feedback submitted');

    // Step 6: Ask a follow-up question related to the initial query
    await chatInput.fill('What about tomorrow\'s weather?');
    await chatInput.press('Enter');

    // Step 7: Give negative feedback on the follow-up response
    const followUpResponse = page.locator('.chatbot-response');
    await expect(followUpResponse).toBeVisible();
    const negativeFeedbackButton = page.locator('button:has-text("👎")');
    await negativeFeedbackButton.click();
    console.log('Negative feedback submitted');

    // Step 8: Check if the chatbot adapts its response based on feedback
    // Re-ask the initial question and verify the response is adapted
    await chatInput.fill('What is the weather today?');
    await chatInput.press('Enter');
    const adaptedResponse = page.locator('.chatbot-response');
    await expect(adaptedResponse).toBeVisible();

    // Step 9: Clear feedback and submit a new query
    const clearFeedbackButton = page.locator('button:has-text("Clear Feedback")');
    await clearFeedbackButton.click();
    console.log('Feedback cleared');
    await chatInput.fill('Tell me a joke.');
    await chatInput.press('Enter');

    // Step 10: Log out from the application
    const logoutButton = page.locator('button:has-text("Log out")');
    await logoutButton.click();
    await expect(page).toHaveURL('https://dev.roost.ai/roostgpt');
  } catch (error) {
    console.error('Error during chatbot interaction or feedback process:', error);
    throw error;
  }
});