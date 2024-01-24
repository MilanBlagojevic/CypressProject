/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";

describe("TC23 - Gear_Bags", () => {
  const homePage = new HomePageActions();

  beforeEach(() => {
    homePage.navigateToURL();
  });

  it("Validate Title of the Page", () => {
    homePage.validateTitle().should("eq", "Home Page");
  });

  it("Add to Cart functionality", () => {
    cy.contains('Gear').trigger('mouseover', {force: true});
    cy.contains('Fitness Equipment').click({force: true});
    cy.get(':nth-child(4) > .toolbar-sorter > #sorter').select('Price');

    cy.get(':nth-child(7) > .product-item-info > .details > .name > .product-item-link').click();
    cy.get('#product-price-22 > .price').contains('$19.00');
    cy.get('.stock > span').contains('In stock');
    cy.get('#qty').clear().type('3');
    cy.get('#product-addtocart-button').click();
  });
});