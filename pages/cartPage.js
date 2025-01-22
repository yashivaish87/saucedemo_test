import BasePage from "./basePage.js";
import { By, until } from "selenium-webdriver";

export default class CartPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.checkoutButton = By.id("checkout");
    this.cartBadge = By.className("shopping_cart_badge");
  }

  //get Count of items in cart
  async getCartCount() {
    return (await this.isElementPresent(this.cartBadge))
      ? parseInt(await this.getElementText(this.cartBadge))
      : 0;
  }

  //click on continue shopping button in cart
  async continueShopping() {
    const continueButton = await this.driver.findElement(
      By.id("continue-shopping")
    );
    await this.driver.wait(until.elementIsVisible(continueButton), 5000);
    await continueButton.click();
    console.log("Navigated back to the shopping list.");
  }

  //remove item from cart based on price
  async removeItemByPrice(minPrice, maxPrice) {
    const items = await this.driver.wait(
      until.elementsLocated(By.className("cart_item")),
      10000
    );
    for (let item of items) {
      const priceText = await item
        .findElement(By.className("inventory_item_price"))
        .getText();
      const price = parseFloat(priceText.replace("$", ""));
      if (price >= minPrice && price <= maxPrice) {
        const removeButton = item.findElement(
          By.xpath(".//button[text()='Remove']")
        );
        await this.driver.wait(until.elementIsVisible(removeButton), 5000);
        await removeButton.click();

        console.log(`Item with price $${price} removed from the cart.`);
        break;
      }
    }
  }

  //click on checkout button
  async clickCheckout() {
    await this.clickElement(this.checkoutButton);
    console.log("Navigated to the checkout page.");
  }
}
