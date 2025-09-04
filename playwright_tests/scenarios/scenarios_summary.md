# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 14
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-09-04 18:06:42

## Scenarios

### 1. Verify User Login with Google OAuth
_This scenario tests the user login functionality using Google OAuth. It verifies the successful login and redirection to the user's dashboard._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, file-upload, form-submission, network-resilience, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Locate and click on the 'Sign in with Google' link.
- Enter a valid Google email address in the Google login page.
- Enter the associated password and submit.
- Complete any required two-factor authentication steps.
- Ensure redirection to the primary dashboard at https://dev.roost.ai.
- Verify the user's name or profile picture is displayed on the dashboard, indicating a successful login.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is redirected to Google login page.
- User successfully logs in with Google credentials.
- User is redirected to https://dev.roost.ai.
- User's profile is displayed on the dashboard.

---

### 2. Verify User Login with GitHub OAuth
_This scenario tests the process of logging in using GitHub OAuth and ensures the user is granted access to the dashboard upon successful authentication._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, file-upload, form-submission, performance, security, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: medium

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Locate and click on the 'Sign in with GitHub' link.
- Enter the GitHub username on the GitHub login page.
- Enter the associated password and submit.
- Authorize the application if prompted.
- Ensure redirection to the primary dashboard at https://dev.roost.ai.
- Confirm the user's profile is visible on the dashboard, indicating successful login.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]`, **Action**: click

#### Expected Results:
- Redirection to GitHub login page is successful.
- User logs in with GitHub credentials.
- User is redirected back to https://dev.roost.ai.
- Dashboard displays the user's GitHub profile.

---

### 3. Verify User Login with Microsoft Azure OAuth
_This test scenario ensures the completion of login using Microsoft Azure OAuth and checks for user redirection to the dashboard upon successful login._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, file-upload, form-submission, performance, security, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: medium

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login

#### Steps:
- Launch the login page at https://dev.roost.ai/login.
- Click on the 'Sign in with Microsoft' link.
- Enter Microsoft account email on the login page.
- Submit the password and proceed.
- Complete the Microsoft multi-factor authentication if prompted.
- Verify redirection to https://dev.roost.ai.
- Check for user profile visibility on the dashboard.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code&scope=user.read&state=azure&client_id=946156a9-5142-4469-b79f-bdcc9e76cf7f&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'azure')]`, **Action**: click

#### Expected Results:
- Successful redirection to Microsoft login page.
- User logs in with valid Microsoft credentials.
- Successful redirection back to https://dev.roost.ai.
- User's profile is shown on the dashboard.

---

### 4. Verify User Login with Okta OAuth
_This scenario tests logging in using Okta OAuth and confirms that the user is directed to the dashboard following successful authentication._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, cross-browser, file-upload, form-submission, performance, security, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: medium

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login

#### Steps:
- Open https://dev.roost.ai/login in a browser.
- Find and click on the 'Sign in with Okta' link.
- Enter Okta account credentials on the Okta login page.
- Submit the login form.
- If prompted, complete the two-factor authentication.
- Verify redirection to the dashboard at https://dev.roost.ai.
- Ensure the user's profile is displayed, confirming login success.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'okta')]`, **Action**: click

#### Expected Results:
- User is directed to Okta login page.
- Successful login with Okta credentials.
- Redirected to the dashboard at https://dev.roost.ai.
- User profile is visible on the dashboard.

---

### 5. Verify Navigation and Accessibility of the API Documentation Page
_This scenario tests the user's ability to navigate to the API documentation page and verify its accessibility features._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, cross-browser, data-validation, keyboard-navigation, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 55 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/docs/api

#### Steps:
- Open the browser and navigate to the homepage 'https://dev.roost.ai'.
- Locate the 'roost.ai' logo link on the homepage.
- Click on the 'roost.ai' logo link that leads to the API documentation page.
- Verify that the page has navigated to 'https://dev.roost.ai/docs/api'.
- Check the presence of the API documentation title on the page.
- Scroll through the documentation to ensure all sections are visible.
- Verify that each section is properly tagged with appropriate ARIA roles.
- Ensure the documentation is navigable using keyboard shortcuts.
- Check for the presence of alternative text for all images and icons.
- Validate the color contrast of text against the background.
- Ensure that all interactive elements are accessible via tab navigation.

#### Selectors Used:
- **Type**: a, **Text**: 'roost.ai', **Selector**: `//a[@href='/docs/api' and contains(@class, 'logo')]`, **Action**: click

#### Expected Results:
- User successfully navigates to the API documentation page.
- All sections of the documentation are visible and accessible.
- Page complies with accessibility standards (WCAG 2.1).

---

### 6. Ensure Proper Functionality of External API Links
_This scenario tests the functionality and accessibility of external links provided in the API documentation page._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, cross-browser, error-handling, keyboard-navigation, navigation, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: medium

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/docs/api

#### Steps:
- Navigate to the API documentation page at 'https://dev.roost.ai/docs/api'.
- Identify the external link to Swagger API documentation.
- Click on the external link to verify it opens in a new tab.
- Ensure the new tab loads the Swagger API documentation page correctly.
- Check that the link provides the correct and expected content.
- Verify the presence of a return link to the original documentation page.
- Close the tab and return to the API documentation page.
- Check that the original page state is maintained after returning.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://dev.roost.ai/api/swagger' and contains(@class, 'roost-icon')]`, **Action**: click

#### Expected Results:
- External links open in a new tab and load the intended content.
- Users can navigate back to the original page without loss of state.

---

### 7. Configure and Verify RoostGPT Testing Parameters
_This scenario tests the ability of a user to configure testing parameters in the RoostGPT form and verify the configuration._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, configuration, drag-and-drop, error-handling, form-submission, network-resilience, performance, ui-test
**Est. Execution Time**: 75 seconds | **Flakiness Potential**: high

**Type**: configuration
**Pages Involved:**
- https://dev.roost.ai/gptCLIForm

#### Steps:
- Navigate to the RoostGPT Config page.
- Locate the Roost Token input field.
- Type a valid Roost Token into the input field.
- Select 'Unit Test' from the Test Type dropdown.
- Select 'Java' from the Code Language dropdown.
- Select 'JUnit5' from the Test Framework dropdown.
- Select 'Java SE 21(Default)' from the Java Version dropdown.
- Select 'Maven' from the Java Build Tool dropdown.
- Select 'Maven 3.8.6 (Default)' from the Maven Version dropdown.
- Locate and click the Verify button.
- Observe any confirmation or error messages.
- Ensure the test configuration is saved and accurately reflected in the UI.
- Verify that no error messages are displayed on incorrect inputs.
- Check the persistence of settings by refreshing the page.
- Re-confirm the configuration is correctly saved.

#### Selectors Used:
- **Type**: input, **Text**: '', **Selector**: `//div[@id='roostToken']/div[2]/div/div[2]/div/input`, **Action**: type
- **Type**: button, **Text**: '', **Selector**: `[data-testid="openai-token-unMask-icon"]`, **Action**: click

#### Expected Results:
- All selected options are saved and displayed correctly.
- Verification succeeds with a valid configuration.
- No error messages appear for valid inputs.

---

### 8. Integrate and Verify GitHub Repository
_This scenario tests the integration of a GitHub repository into the RoostGPT platform and verifies the integration._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, error-handling, form-submission, integration, network-resilience, performance, ui-test
**Est. Execution Time**: 75 seconds | **Flakiness Potential**: high

**Type**: integration
**Pages Involved:**
- https://dev.roost.ai/gptCLIForm

#### Steps:
- Navigate to the RoostGPT Config page.
- Locate the Github Token input field.
- Type a valid Github Token into the input field.
- Select 'Cloud' from the Github Type options.
- Locate the Verify button next to the Github Token input.
- Click the Verify button to validate the token.
- Observe the confirmation message indicating successful integration.
- Verify that the repository integration is visible in the UI.
- Check for error messages on incorrect token input.
- Ensure the token is masked while typing.
- Attempt integration with an expired token.
- Validate error handling for network issues during verification.
- Refresh the page to ensure persistence of integration settings.
- Verify integration using different GitHub account tokens.
- Check the UI updates correctly post verification.

#### Selectors Used:
- **Type**: input, **Text**: '', **Selector**: `[data-testid="github-source-token"]`, **Action**: type
- **Type**: button, **Text**: '', **Selector**: `[data-testid="github-source-token-unMask-icon"]`, **Action**: click

#### Expected Results:
- GitHub repository is successfully integrated.
- Verification succeeds with a valid token.
- Error messages are displayed for invalid tokens.

---

### 9. Advanced Configuration with Vulnerability Testing
_This scenario tests the configuration of advanced settings in the RoostGPT form, particularly focusing on vulnerability testing options._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, advanced-settings, api-integration, auto-generated, drag-and-drop, error-handling, file-download, file-upload, form-submission, network-resilience, performance, security, ui-test
**Est. Execution Time**: 75 seconds | **Flakiness Potential**: high

**Type**: advanced-settings
**Pages Involved:**
- https://dev.roost.ai/gptCLIForm

#### Steps:
- Navigate to the RoostGPT Config page.
- Locate the 'Traverse to all sub-directories' label.
- Ensure the corresponding option is selected.
- Locate the 'Check for Vulnerability' label.
- Ensure the corresponding option is selected.
- Locate the 'Functions to Test' input field.
- Type a list of functions to be tested.
- Select '1' from the Iterations dropdown.
- Select 'English' from the User Language options.
- Click 'Download Env Config' to save the configuration.
- Verify the configuration file is downloaded successfully.
- Check that all selections are saved and persist after page refresh.
- Attempt to save configuration without selecting mandatory fields.
- Verify UI updates reflect advanced settings accurately.
- Check for errors when entering invalid function names.

#### Selectors Used:
- **Type**: label, **Text**: 'Traverse to all sub-directories', **Selector**: `//div[@id='advanced']/div[2]/div[4]/div[2]/div/div/label`, **Action**: check
- **Type**: label, **Text**: 'Check for Vulnerabilty', **Selector**: `//div[@id='advanced']/div[2]/div[5]/div[2]/div/div/label`, **Action**: check

#### Expected Results:
- Advanced settings are configured correctly and saved.
- Vulnerability testing settings are applied.
- Configuration file is downloaded successfully.

---

### 10. Feedback Form Submission
_This scenario tests the submission of feedback using the feedback form on the RoostGPT Config page._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, error-handling, feedback, form-submission, network-resilience, performance, ui-test
**Est. Execution Time**: 75 seconds | **Flakiness Potential**: high

**Type**: feedback
**Pages Involved:**
- https://dev.roost.ai/gptCLIForm

#### Steps:
- Navigate to the RoostGPT Config page.
- Locate the Feedback form textarea.
- Type feedback comments into the textarea.
- Ensure the feedback is clear and complete.
- Locate the Submit button for the feedback form.
- Click the Submit button.
- Observe any confirmation message indicating feedback submission.
- Verify that the feedback submission does not trigger any errors.
- Check the textarea clears after submission.
- Attempt to submit feedback with an empty textarea.
- Verify submission with a very long feedback text.
- Test feedback submission under slow network conditions.
- Check feedback submission with special characters.
- Refresh the page and verify feedback form resets correctly.
- Validate error handling for server-side issues during submission.

#### Selectors Used:
- **Type**: textarea, **Text**: '', **Selector**: `[data-testid="Feedback-form"]`, **Action**: type

#### Expected Results:
- Feedback is submitted successfully.
- Confirmation message appears post submission.
- No errors occur during submission.

---

### 11. Verify User Login with Google Integration
_This test verifies that a user can successfully log into the Roost Enterprise platform using the Google integration option._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, file-upload, form-submission, keyboard-navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Verify the presence of the Google sign-in button.
- Click on the Google sign-in button.
- Redirect to Google's authentication page.
- Enter valid Google credentials (email and password).
- Submit the Google login form.
- Wait for redirection back to the Roost Enterprise dashboard.
- Verify that the user is successfully logged in by checking for a welcome message or user profile icon.
- Log out of the Roost Enterprise platform.
- Verify that the user is redirected back to the login page.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is redirected to Google's authentication page.
- User is successfully authenticated and redirected back to the Roost Enterprise dashboard.
- User session is active, and user-specific elements are visible.

---

### 12. Access and Verify API Documentation Link
_This test verifies that a user can access the API Documentation page from the login page and it loads correctly._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://docs.roost.ai

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Scroll down to the footer section.
- Verify the presence of the 'Documentation' link.
- Click on the 'Documentation' link.
- Wait for the redirection to the API Documentation page.
- Verify that the API Documentation page loads successfully.
- Check for the presence of introductory content on the API Documentation page.
- Verify the availability of search functionality on the documentation page.
- Navigate back to the login page.
- Ensure the footer items reappear upon returning to the login page.

#### Selectors Used:
- **Type**: a, **Text**: 'Documentation', **Selector**: `//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User is redirected to the API Documentation page.
- API Documentation page loads correctly with all content visible.
- Functional search is available on the documentation page.

---

### 13. Verify Login Access with Microsoft Integration
_This scenario tests the user login functionality using Microsoft OAuth integration on the Roost Enterprise platform._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, file-upload, form-submission, keyboard-navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate and verify the presence of the Microsoft sign-in button.
- Click on the Microsoft sign-in button.
- Redirect to Microsoft's authentication page.
- Enter valid Microsoft account credentials.
- Submit the Microsoft login form.
- Observe the redirection back to Roost Enterprise dashboard.
- Verify the user is logged in by checking for user profile elements.
- Log out from the Roost platform.
- Ensure the user is redirected back to the login page post logout.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code&scope=user.read&state=azure&client_id=946156a9-5142-4469-b79f-bdcc9e76cf7f&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'azure')]`, **Action**: click

#### Expected Results:
- User reaches Microsoft's authentication page.
- Successful login redirects user to the Roost dashboard.
- User session is active and profile details are visible.

---

### 14. Verify Navigation to Privacy Policy
_This scenario ensures that users can access the Privacy Policy page from the login page and that it displays correctly._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 45 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://roost.ai/privacy-policy

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Scroll to the footer section.
- Verify the presence of the 'Privacy Policy' link.
- Click on the 'Privacy Policy' link.
- Check that the Privacy Policy page loads correctly.
- Verify the content of the Privacy Policy page is visible and readable.
- Check for any multimedia content (e.g., videos or infographics) on the Privacy Policy page.
- Navigate back to the login page.
- Ensure the footer section is visible upon return to the login page.

#### Selectors Used:
- **Type**: a, **Text**: 'Privacy Policy', **Selector**: `//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User is redirected to the Privacy Policy page.
- Privacy Policy content is loaded and visible.
- Navigation back to the login page is successful.

---

