/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import ShoppingPageActions from "../../PageObjects/PageActions/ShoppingPageActions.cy";
import ShoppingPageElements from "../../PageObjects/PageElements/ShoppingPageElements.cy";

describe("TC12 - Women_Tees", () => {
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
    homePage.womenTeesPage();
    shopPageElements.sortByDropDown().select('Price');
    shopPageElements.divaGymTee().click();
    shopPageElements.divaGymTeePrice().contains('$32.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.sizeL().click();
    shopPageElements.colorYellow().click();
    shopPageElements.quantityField().clear().type('1');
    shopPage.addToCart();
  });
});