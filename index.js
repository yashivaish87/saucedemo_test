import { Builder } from "selenium-webdriver";
import LoginPage from "./pages/loginPage.js";
import InventoryPage from "./pages/inventoryPage.js";
import CartPage from "./pages/cartPage.js";
import CheckoutPage from "./pages/checkoutPage.js";
import ProductPage from "./pages/productPage.js";
import LogoutPage from "./pages/logoutPage.js";

(async function main() {
  const driver = await new Builder().forBrowser("MicrosoftEdge").build();
  try {
    const loginPage = new LoginPage(driver);
    const inventoryPage = new InventoryPage(driver);
    const cartPage = new CartPage(driver);
    const checkoutPage = new CheckoutPage(driver);
    const productPage = new ProductPage(driver, "Sauce Labs Onesie");
    const logoutPage = new LogoutPage(driver);

    // Task 1: Login Validation
    await driver.get("https://www.saucedemo.com/");
    await loginPage.login("standard_user", "secret_sauce");
    await inventoryPage.waitForInventoryPage();

    //Task 2: Add Items to Cart from Inventory Page
    // sort items in low to high price order
    await inventoryPage.sortItems("lohi");
    await inventoryPage.addItemToCart("sauce-labs-backpack");
    await inventoryPage.addItemToCart("sauce-labs-bike-light");
    let updatedCartCount = await cartPage.getCartCount();
    console.log(`Updated Cart Count: ${updatedCartCount}`);
    await inventoryPage.goToCart();
    await cartPage.continueShopping();

    // Task 3: Add Items to Cart from Inventory Item Page
    await inventoryPage.clickProductName(2);
    await productPage.addToCart();
    updatedCartCount = await cartPage.getCartCount();
    console.log(`Updated Cart Count: ${updatedCartCount}`);

    // Task 4: Remove item from cart
    await inventoryPage.goToCart();
    await cartPage.removeItemByPrice(8, 10);
    updatedCartCount = await cartPage.getCartCount();
    console.log(`Updated Cart Count: ${updatedCartCount}`);

    // Task 5: Checkout
    await cartPage.clickCheckout();
    await checkoutPage.fillCheckoutInfo("John", "Doe", "12345");
    await checkoutPage.clickContinue();
    await checkoutPage.verifyItems();
    const totalAmount = await checkoutPage.getTotalAmount();
    console.log(`Total Amount: ${totalAmount}`);
    await checkoutPage.completePurchase();

    // Task 6: Logout
    await logoutPage.logout();
  } catch (error) {
    console.error("Test failed: ", error);
  } finally {
    await driver.quit();
  }
})();
