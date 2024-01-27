/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import ShoppingPageActions from "../../PageObjects/PageActions/ShoppingPageActions.cy";
import ShoppingPageElements from "../../PageObjects/PageElements/ShoppingPageElements.cy";

describe("TC15 - Men_Jackets", () => {
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
    homePage.menJacketsPage();
    shopPageElements.sortByDropDown().select('Price');
    shopPageElements.kenobyTrailJacket().click();
    shopPageElements.kenobyTrailJacketPrice().contains('$47.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.sizeXS().click();
    shopPageElements.colorBlue().click();
    shopPageElements.quantityField().clear().type('2');
    shopPage.addToCart();
  });
});