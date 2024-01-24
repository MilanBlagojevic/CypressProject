/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";

describe("TC22 - Gear_Bags", () => {
  const homePage = new HomePageActions();

  beforeEach(() => {
    homePage.navigateToURL();
  });

  it("Validate Title of the Page", () => {
    homePage.validateTitle().should("eq", "Home Page");
  });

  it("Add to Cart functionality", () => {
    cy.contains('Gear').trigger('mouseover', {force: true});
    cy.contains('Bags').click({force: true});
    cy.get(':nth-child(4) > .toolbar-sorter > #sorter').select('Price');

    cy.get(':nth-child(8) > .product-item-info > .details > .name > .product-item-link').click();
    cy.get('#product-price-3 > .price').contains('$38.00');
    cy.get('.stock > span').contains('In stock');
    cy.get('#qty').clear().type('2');
    cy.get('#product-addtocart-button').click();
  });
});