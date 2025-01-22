import BasePage from "./basePage.js";
import { By, until } from "selenium-webdriver";

export default class ProductPage extends BasePage {
  constructor(driver, itemName) {
    super(driver);
    //selectors
    const itemId = itemName.toLowerCase().replace(/ /g, "-");
    this.addToCartBtn = By.xpath(`//*[@id="add-to-cart"]`);
    this.backToProducts = By.id("back-to-products");
    this.cartLink = By.className("shopping_cart_link");
  }

  //add item to cart from product details page
  async addToCart() {
    const addToCartButton = await this.driver.findElement(this.addToCartBtn);
    await this.driver.wait(until.elementIsVisible(addToCartButton), 5000);
    await addToCartButton.click();
    console.log("Item added to cart from product details page.");
  }

  //navigate to the cart page
  async goToCart() {
    await this.clickElement(this.cartLink);
    console.log("Navigated to the cart page.");
  }

  //navigate back to the inventory page
  async backToProducts() {
    const backButton = await this.driver.findElement(this.backToProducts);
    await this.driver.wait(until.elementIsVisible(backButton), 5000);
    await backButton.click();
    console.log("Navigated back to the inventory page.");
  }
}
