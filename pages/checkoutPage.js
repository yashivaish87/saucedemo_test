import { By, until } from "selenium-webdriver";

export default class CheckoutPage {
  constructor(driver) {
    this.driver = driver;
    // selectors
    this.firstName = By.id("first-name");
    this.lastName = By.id("last-name");
    this.postalCode = By.id("postal-code");
    this.continueBtn = By.id("continue");
    this.totalAmt = By.css(".summary_total_label");
    this.finishBtn = By.id("finish");
    this.successMsg = By.css(".complete-header");
  }

  //fill checkout info
  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.driver.findElement(this.firstName).sendKeys(firstName);
    await this.driver.findElement(this.lastName).sendKeys(lastName);
    await this.driver.findElement(this.postalCode).sendKeys(postalCode);
    console.log("Filled out the checkout form.");
  }

  //continue after filling out the form
  async clickContinue() {
    const continueButton = await this.driver.findElement(this.continueBtn); // Or use an appropriate selector for Continue button
    await this.driver.wait(until.elementIsVisible(continueButton), 5000);
    await continueButton.click();
    console.log("Clicked Continue after filling checkout form.");
  }

  //verify items
  async verifyItems() {
    const items = await this.driver.findElements(By.css(".cart_item"));
    if (items.length > 0) {
      console.log("Items are present in the checkout overview page.");
    } else {
      console.log("No items found in the checkout overview page.");
    }
  }

  //get total amount
  async getTotalAmount() {
    const totalAmount = await this.driver.findElement(this.totalAmt);
    await this.driver.wait(until.elementIsVisible(totalAmount), 5000);
    return totalAmount.getText(); // Get the total price text
  }

  //complete the purchase
  async completePurchase() {
    await this.driver.findElement(this.finishBtn).click();
    console.log("Clicked the Finish button to complete the purchase");
  }

  //success message after completing the purchase
  async getSuccessMessage() {
    const message = await this.driver.findElement(this.successMsg);
    return await message.getText();
  }
}
