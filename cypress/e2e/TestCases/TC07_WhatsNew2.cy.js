/// <reference types="cypress" />

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import ShoppingPageActions from "../../PageObjects/PageActions/ShoppingPageActions.cy";
import ShoppingPageElements from "../../PageObjects/PageElements/ShoppingPageElements.cy";

describe("What's new functionality", () => {
  const homePage = new HomePageActions();
  const shopPage = new ShoppingPageActions();
  const shopPageElements = new ShoppingPageElements();

  beforeEach(() => {
    homePage.navigateToURL();
  });

  it("Validate Title of the Page", () => {
    homePage.validateTitle().should("eq", "Home Page");
  });

  it("What's new page", () => {
    homePage.whatsNewPage();
    shopPageElements.gobiHeatTee().click();
    shopPageElements.gobiHeatTeePrice().contains('$29.00');
    cy.get(".stock > span").should("contain", "In stock");
  });
});
