/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import ShoppingPageActions from "../../PageObjects/PageActions/ShoppingPageActions.cy";
import ShoppingPageElements from "../../PageObjects/PageElements/ShoppingPageElements.cy";

describe("TC17 - Men_Tees", () => {
  const homePage = new HomePageActions();
  const shopPage = new ShoppingPageActions();
  const shopPageElements = new ShoppingPageElements();

  beforeEach(() => {
    homePage.navigateToURL();
  });

  it("Validate Title of the Page", () => {
    homePage.validateTitle().should("eq", "Home Page");
  });

  it("Add to Cart functionality", () => {

    homePage.menPage();
    homePage.menTeesPage();
    shopPageElements.sortByDropDown().select('Price');
    shopPageElements.zoltanGymTee().click();
    shopPageElements.zoltanGymTeePrice().contains('$29.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.sizeM().click();
    shopPageElements.colorYellow().click();
    shopPageElements.quantityField().clear().type('4');
    shopPage.addToCart();
  });
});