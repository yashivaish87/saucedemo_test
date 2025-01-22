# Automated Testing Project: SauceDemo

## Overview

This project automates the testing of various functionalities on the SauceDemo e-commerce platform using Selenium WebDriver and JavaScript. It includes end-to-end test cases for:

- Adding items to the cart
- Updating cart items
- Verifying checkout workflow
- Completing purchases
- Validating cart items on the overview page
- Automating logout functionality

## Prerequisites

Before running the project, ensure you have the following installed:

1. **Node.js**: Download and install [Node.js](https://nodejs.org/).
2. **WebDriver**: ChromeDriver is used for browser automation.
3. **Browser**: Any Browser (ensure the version matches your ChromeDriver).

## Project Structure

```plaintext
project-root/
├── index.js              # Main script to execute tests
├── loginPage.js          # Login page object model
├── basePage.js           # Base page object model
├── inventoryPage.js      # Inventory page object model
├── productPage.js        # Product page object model
├── cartPage.js           # Cart page object model
├── checkoutPage.js       # Checkout page object model
├── logoutPage.js         # Logout page object model
├── package.json          # Node.js dependencies
├── README.md             # Project documentation
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repository/saucedemo-automation.git
   cd saucedemo-automation
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## How to Run Tests

### Run All Tests

Execute the `index.js` file to run all tests:

```bash
node index.js
```

### Test Example

A typical test flow includes:

1. Logging into the application.
2. Adding items to the cart.
3. Proceeding to checkout.
4. Verifying the cart items on the checkout overview page.
5. Completing the purchase.
6. Logging out.

## Key Features

- **Dynamic Locators**: Uses CSS selectors for robust element identification.
- **Wait Mechanisms**: Implements explicit waits for elements to be located or visible.
- **Modular Design**: Test steps are encapsulated in page-specific classes.
- **Error Handling**: Logs errors and handles exceptions gracefully.

## Troubleshooting

### Common Issues

1. **TimeoutError**:

   - Cause: Element not found within the timeout period.
   - Solution: Increase the wait time or verify the locator.

2. **NoSuchElementError**:

   - Cause: Locator mismatch or element not present.
   - Solution: Confirm the locator and ensure the element exists in the DOM.

### Debugging

- Use `console.log()` to print variable values or status messages.
- Ensure all locators match the current application DOM.

## Future Enhancements

- Add more test cases for edge scenarios.
- Integrate a reporting tool like Allure for detailed test reports.
- Use a testing framework such as Mocha or Jest for better test structure.



