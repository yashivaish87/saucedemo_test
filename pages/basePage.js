import { By, until } from "selenium-webdriver";

export default class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async clickElement(locator) {
    const element = await this.driver.wait(
      until.elementLocated(locator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(element), 5000);
    await element.click();
  }

  async sendKeys(locator, text) {
    const element = await this.driver.wait(
      until.elementLocated(locator),
      10000
    );
    await element.clear();
    await element.sendKeys(text);
  }

  async getElementText(locator) {
    const element = await this.driver.wait(
      until.elementLocated(locator),
      10000
    );
    return await element.getText();
  }

  async isElementPresent(locator) {
    const elements = await this.driver.findElements(locator);
    console.log(`Elements found for locator ${locator}: ${elements.length}`);
    return elements.length > 0;
  }
}
