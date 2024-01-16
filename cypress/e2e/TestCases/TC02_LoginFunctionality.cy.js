/// <reference types="cypress" />

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import LoginPageActions from "../../PageObjects/PageActions/LoginPageActions.cy";

describe("Login functionality", () => {
  const loginPage = new LoginPageActions();
  const homePage = new HomePageActions();

  beforeEach(() => {
    homePage.navigateToURL();
  });

  it("Validate Title of the Page", () => {
    homePage.validateTitle().should("eq", "Home Page");
  });

  it("Login as Customer", () => {
    homePage.loginAsCustomer();
    loginPage.loginCustomerDetails("milan.testing.90@email.com", "ilantesting90");
  });
});
