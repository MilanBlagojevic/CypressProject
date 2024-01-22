/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";

describe("TC10 - Women_Jackets", () => {
  const homePage = new HomePageActions();

  beforeEach(() => {
    homePage.navigateToURL();
  });

  it("Validate Title of the Page", () => {
    homePage.validateTitle().should("eq", "Home Page");
  });

  it("Add to Cart functionality", () => {
    cy.contains('Women').trigger('mouseover', {force: true});
    cy.contains('Tops').trigger('mouseover', {force: true});
    cy.contains('Jackets').click({force: true});
    cy.get(':nth-child(4) > .toolbar-sorter > #sorter').select('Price');

    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').click();
    cy.get('#product-price-1332 > .price').contains('$32.00');
    cy.get('.stock > span').contains('In stock');
    cy.get('#option-label-size-143-item-168').click();
    cy.get('#option-label-color-93-item-50').click();
    cy.get('#qty').clear().type('2');
    cy.get('#product-addtocart-button').click();
  });
});