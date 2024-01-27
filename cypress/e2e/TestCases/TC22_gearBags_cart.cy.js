/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import ShoppingPageActions from "../../PageObjects/PageActions/ShoppingPageActions.cy";
import ShoppingPageElements from "../../PageObjects/PageElements/ShoppingPageElements.cy";

describe("TC22 - Gear_Bags", () => {
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
    homePage.gearBagsPage();
    shopPageElements.sortByDropDown().select('Price');
    shopPageElements.crownSummitBackpack().click();
    shopPageElements.crownSummitBackpackPrice().contains('$38.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.quantityField().clear().type('2');
    shopPage.addToCart();
  });
});