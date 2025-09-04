# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 3
- **Application Base URL**: https://dev.roost.ai/roostgpt
- **Generated On**: 2025-09-04 18:04:50

## Scenarios

### 1. Verify User Login and Chatbot Interaction via Google Auth
_This scenario tests the user's ability to log in through Google and interact with the chatbot, ensuring the chatbot responds accurately and promptly._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, authentication and chatbot interaction, auto-generated, form-submission, network-resilience, performance, ui-test
**Est. Execution Time**: 65 seconds | **Flakiness Potential**: high

**Type**: authentication and chatbot interaction
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai/roostgpt

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Click on the 'Google' login button.
- Authenticate using Google credentials.
- Redirect to the main dashboard at https://dev.roost.ai/roostgpt.
- Initiate a conversation by entering a query in the chatbot input field.
- Wait for the chatbot response.
- Review the response for relevance and accuracy.
- Provide feedback on the response using the feedback option.
- Attempt another inquiry with a different query.
- Observe the chatbot's handling and response time.
- If the response is unsatisfactory, escalate the query to a human agent.
- Verify that the conversation history is visible and accurate.
- Log out of the application using the logout option.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is successfully authenticated via Google.
- User lands on the main dashboard.
- Chatbot interacts correctly with user queries.
- Chatbot feedback mechanism works as expected.
- Escalation to human support is available and functional.
- All interactions are logged correctly.

---

### 2. Test Multilingual Support in Chatbot
_This scenario verifies the chatbot's ability to support and respond in multiple languages._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, localization, performance, ui-test
**Est. Execution Time**: 60 seconds | **Flakiness Potential**: medium

**Type**: localization
**Pages Involved:**
- https://dev.roost.ai/roostgpt

#### Steps:
- Navigate to https://dev.roost.ai/roostgpt.
- Log in using any available OAuth option.
- Initiate a conversation by entering a query in English.
- Observe the chatbot's response in English.
- Switch language to Spanish using the language selection option.
- Enter a query in Spanish.
- Verify the chatbot responds correctly in Spanish.
- Switch to a third language, such as French.
- Enter a query in French.
- Ensure the chatbot responds in French.
- Check if language switching retains conversation history.
- Log out from the application.

#### Selectors Used:
- **Type**: a, **Text**: 'RoostGPT Config', **Selector**: `//a[@href='/gptCLIForm' and contains(@class, 'nav-link')]`, **Action**: click

#### Expected Results:
- Chatbot responds accurately in all selected languages.
- Language switch reflects immediately without page reload.
- Conversation history is preserved across language switches.

---

### 3. Check Feedback Mechanism on Chatbot Responses
_This scenario tests the functionality of providing feedback on chatbot responses and ensuring it affects future interactions._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, feedback, form-submission, performance, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: medium

**Type**: feedback
**Pages Involved:**
- https://dev.roost.ai/roostgpt

#### Steps:
- Navigate to https://dev.roost.ai/roostgpt.
- Log in using any available OAuth option.
- Initiate a conversation by asking a predefined question.
- Receive a response from the chatbot.
- Provide positive feedback on the response.
- Ask a follow-up question related to the initial query.
- Give negative feedback on the follow-up response.
- Check if the chatbot adapts its response based on feedback.
- Clear feedback and submit a new query.
- Log out from the application.

#### Selectors Used:
- **Type**: a, **Text**: 'RoostGPT Config', **Selector**: `//a[@href='/gptCLIForm' and contains(@class, 'nav-link')]`, **Action**: click

#### Expected Results:
- Feedback submission works correctly.
- Chatbot adapts responses based on feedback.
- Feedback can be cleared and reset.

---

