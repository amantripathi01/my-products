# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 1
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-09-05 11:55:23

## Scenarios

### 1. Verify User Addition to Project via Admin Interface
_This test verifies the process of adding a user to a project using the admin interface, ensuring correct navigation, input actions, and successful user addition._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, drag-and-drop, error-handling, form-submission, keyboard-navigation, performance, ui-test, user_management
**Est. Execution Time**: 75 seconds | **Flakiness Potential**: medium

**Type**: user_management
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev-53854943.okta.com/
- https://dev.roost.ai/roostgpt/tests
- https://dev.roost.ai/admin/app

#### Steps:
- Visit the login page at dev.roost.ai.
- Verify navigation to the login page.
- Click on the 'okta' link to initiate authentication.
- Verify navigation to the Okta login page.
- Enter 'Playwright@zb.io' in the email field.
- Enter 'Roost#123' in the password field.
- Click 'Sign In' to submit credentials.
- Verify successful login and navigation to the dashboard page.
- Click on the 'Admin' tab to access admin features.
- Verify navigation to the admin section.
- Click on 'Add Roosters' to open the user addition interface.
- Enter 'playwright' in the invite field.
- Select 'playwright' from the dropdown list.
- Click 'Add to <project_name>' to complete the process.
- Verify that the user is added successfully.

#### Selectors Used:
- **Type**: a, **Text**: 'okta', **Selector**: `html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > div > div > ul > li:nth-of-type(4) > a.okta[href="https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin"][target="_self"]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `html > body > div:nth-of-type(2) > div > main > div:nth-of-type(2) > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > span > input[type="text"][placeholder][name="username"][id="okta-signin-username"][aria-label][autocomplete="username"][required]`, **Action**: type
- **Type**: input, **Text**: '', **Selector**: `html > body > div:nth-of-type(2) > div > main > div:nth-of-type(2) > div > div > form > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > span > input[type="password"][placeholder][name="password"][id="okta-signin-password"][aria-label][autocomplete="current-password"][required]`, **Action**: type
- **Type**: input, **Text**: 'Sign In', **Selector**: `html > body > div:nth-of-type(2) > div > main > div:nth-of-type(2) > div > div > form > div:nth-of-type(2) > input.button.button-primary[type="submit"][id="okta-signin-submit"]`, **Action**: click
- **Type**: a, **Text**: 'Admin', **Selector**: `html > body > div:nth-of-type(1) > div:nth-of-type(2) > header > div > nav > div:nth-of-type(2) > div > ul > li:nth-of-type(2) > a.nav-link[data-testid="admin-tab"][href="/admin/app"]`, **Action**: click
- **Type**: Add Roosters, **Text**: 'Add Roosters', **Selector**: `html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > div > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1)`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > div:nth-of-type(3) > div > div:nth-of-type(1) > div > div:nth-of-type(2) > div > input[id="inviteMemberDropdown"][type="text"][placeholder="Search for Roosters (min 3 chars) ..."][autocomplete="off"]`, **Action**: type
- **Type**: div, **Text**: 'playwright', **Selector**: `html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > div:nth-of-type(3) > div > div:nth-of-type(1) > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div`, **Action**: click
- **Type**: Add to zbio, **Text**: 'Add to <project_name>', **Selector**: `html > body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > div:nth-of-type(3) > div > div:nth-of-type(4) > div > div:nth-of-type(2)`, **Action**: click

#### Expected Results:
- User successfully navigates through login and admin pages without errors.
- User 'playwright' is added to the specified project in the admin interface.

---

