/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import ShoppingPageActions from "../../PageObjects/PageActions/ShoppingPageActions.cy";
import ShoppingPageElements from "../../PageObjects/PageElements/ShoppingPageElements.cy";

describe("TC10 - Women_Jackets", () => {
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
    homePage.womenJacketsPage();
    shopPageElements.sortByDropDown().select('Price');
    shopPageElements.jadeYogaJacket().click();
    shopPageElements.jadeYogaJacketPrice().contains('$32.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.sizeM().click();
    shopPageElements.colorBlue().click();
    shopPageElements.quantityField().clear().type('2');
    shopPage.addToCart();
  });
});