/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import ShoppingPageActions from "../../PageObjects/PageActions/ShoppingPageActions.cy";
import ShoppingPageElements from "../../PageObjects/PageElements/ShoppingPageElements.cy";

describe("TC11 - Women_Hoodies", () => {
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
    homePage.womenHoodiesPage();
    shopPageElements.sortByDropDown().select('Price');
    shopPageElements.autumnPullie().click();
    shopPageElements.autumnPulliePrice().contains('$57.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.sizeS().click();
    shopPageElements.colorRed().click();
    shopPageElements.quantityField().clear().type('3');
    shopPage.addToCart();
  });
});