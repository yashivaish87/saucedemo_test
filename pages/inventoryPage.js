import BasePage from "./basePage.js";
import { By, until } from "selenium-webdriver";

export default class InventoryPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.sortDropdown = By.className("product_sort_container");
    this.cartLink = By.className("shopping_cart_link");
  }

  async waitForInventoryPage() {
    await this.driver.wait(until.urlContains("inventory.html"), 10000);
    console.log("Inventory page loaded");
  }

  //sort itmes by price
  async sortItems(optionValue) {
    const dropdown = await this.driver.findElement(this.sortDropdown);
    await dropdown.sendKeys(optionValue); // e.g., "lohi"
  }

  //add item to cart
  async addItemToCart(itemName) {
    const itemId = itemName.toLowerCase().replace(/ /g, "-");
    const addButton = By.xpath(`//*[@id="add-to-cart-${itemId}"]`);
    const element = await this.driver.wait(
      until.elementLocated(addButton),
      10000
    );
    await this.driver.wait(until.elementIsVisible(element), 10000);
    await element.click();

    console.log(`Item ${itemName} added to the cart`);
  }

  //go to cart
  async goToCart() {
    await this.clickElement(this.cartLink);
    console.log("Navigated to the cart page.");
  }

  //click on product name
  async clickProductName(productId) {
    const productXpath = `//*[@id="item_${productId}_title_link"]/div`;
    const productElement = await this.driver.findElement(
      By.xpath(productXpath)
    );
    await this.driver.wait(until.elementIsVisible(productElement), 5000);
    await productElement.click();
    console.log(`Navigated to the detailed product.`);
  }
}
