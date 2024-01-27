/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import ShoppingPageActions from "../../PageObjects/PageActions/ShoppingPageActions.cy";
import ShoppingPageElements from "../../PageObjects/PageElements/ShoppingPageElements.cy";

describe("TC13 - Women_Tanks", () => {
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
    homePage.womenPage();
    homePage.womenTanksPage();
    shopPageElements.sortByDropDown().select('Price');
    shopPageElements.zoeTank().click();
    shopPageElements.zoeTankPrice().contains('$29.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.sizeXL().click();
    shopPageElements.colorOrange().click();
    shopPageElements.quantityField().clear().type('5');
    shopPage.addToCart();
  });
});