import BasePage from "./basePage.js";
import { By, until } from "selenium-webdriver";

export default class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.usernameField = By.id("user-name");
    this.passwordField = By.id("password");
    this.loginButton = By.id("login-button");
    this.errorMessage = By.className("error-message-container");
  }

  //login validation
  async login(username, password) {
    await this.sendKeys(this.usernameField, username);
    await this.sendKeys(this.passwordField, password);
    await this.clickElement(this.loginButton);

    await this.driver.wait(until.urlContains("inventory.html"), 10000);

    console.log("Login successful!");
  }

  async getErrorMessage() {
    return await this.getElementText(this.errorMessage);
  }
}
