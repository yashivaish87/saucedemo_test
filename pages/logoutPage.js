import { By, until } from "selenium-webdriver";

export default class LogoutPage {
  constructor(driver) {
    this.driver = driver;
    //selectors
    this.burgerMenu = By.css(".bm-burger-button");
    this.logoutButton = By.css("[data-test='logout-sidebar-link']");
    this.loginPageURL = "https://www.saucedemo.com/";
    this.loginPageElement = By.id("login-button");
  }

  // open menu
  async clickBurgerMenu() {
    const menuIcon = await this.driver.findElement(this.burgerMenu);
    await this.driver.wait(until.elementIsVisible(menuIcon), 5000);
    await menuIcon.click();
    console.log("Clicked on burger menu.");
  }

  // click logout button
  async clickLogoutButton() {
    const logoutBtn = await this.driver.findElement(this.logoutButton);
    await this.driver.wait(until.elementIsVisible(logoutBtn), 5000);
    await logoutBtn.click();
    console.log("Clicked on Logout button.");
  }

  //verify redirection
  async verifyRedirection() {
    await this.driver.wait(until.urlIs(this.loginPageURL), 5000);
    const loginPageEmt = await this.driver.findElement(this.loginPageElement);
    await this.driver.wait(until.elementIsVisible(loginPageEmt), 5000);
    console.log("Successfully redirected to the login page.");
  }

  // logout function
  async logout() {
    await this.clickBurgerMenu();
    await this.clickLogoutButton();
    await this.verifyRedirection();
  }
}
