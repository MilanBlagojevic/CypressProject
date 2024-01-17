/// <reference types="cypress" />

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";

describe("What's new functionality", () => {
  const homePage = new HomePageActions();

  beforeEach(() => {
    homePage.navigateToURL();
  });

  it("Validate Title of the Page", () => {
    homePage.validateTitle().should("eq", "Home Page");
  });

  it("What's new page", () => {
    homePage.whatsNewPage();
    cy.xpath("//*[@id='maincontent']/div[4]/div[1]/div[2]/div[3]/div/div/ol/li[2]/div/div/strong/a").click();
    cy.get("#product-price-446 > .price").should("contain", "$29.00");
    cy.get(".stock > span").should("contain", "In stock");
  });
});