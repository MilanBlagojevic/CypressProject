/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";

describe("TC16 - Men_Hoodies", () => {
  const homePage = new HomePageActions();

  beforeEach(() => {
    homePage.navigateToURL();
  });

  it("Validate Title of the Page", () => {
    homePage.validateTitle().should("eq", "Home Page");
  });

  it("Add to Cart functionality", () => {

    cy.get('#ui-id-5 > :nth-child(2)').click();
    cy.get('.categories-menu > :nth-child(2) > :nth-child(1) > a').click();
    cy.get(':nth-child(4) > .toolbar-sorter > #sorter').select('Price');

    cy.get(':nth-child(5) > .product-item-info > .details > .name > .product-item-link').click();
    cy.get('#product-price-158 > .price').contains('$54.00');
    cy.get('.stock > span').contains('In stock');
    cy.get('#option-label-size-143-item-169').click();
    cy.get('#option-label-color-93-item-49').click();
    cy.get('#qty').clear().type('3');
    cy.get('#product-addtocart-button').click();
  });
});