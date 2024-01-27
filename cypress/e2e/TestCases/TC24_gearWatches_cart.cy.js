/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import ShoppingPageActions from "../../PageObjects/PageActions/ShoppingPageActions.cy";
import ShoppingPageElements from "../../PageObjects/PageElements/ShoppingPageElements.cy";

describe("TC24 - Gear_Watches", () => {
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
    
    homePage.gearPage();
    homePage.gearWatchesPage();
    shopPageElements.sortByDropDown().select('Price');
    shopPageElements.aimAnalogWatch().click();
    shopPageElements.aimAnalogWatchPrice().contains('$45.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.quantityField().clear().type('2');
    shopPage.addToCart();
  });
});