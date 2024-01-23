/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";

describe("TC17 - Men_Tees", () => {
  const homePage = new HomePageActions();

  beforeEach(() => {
    homePage.navigateToURL();
  });

  it("Validate Title of the Page", () => {
    homePage.validateTitle().should("eq", "Home Page");
  });

  it("Add to Cart functionality", () => {

    cy.get('#ui-id-5 > :nth-child(2)').click();
    cy.get('.categories-menu > :nth-child(2) > :nth-child(3) > a').click();
    cy.get(':nth-child(4) > .toolbar-sorter > #sorter').select('Price');

    cy.get(':nth-child(6) > .product-item-info > .details > .name > .product-item-link').click();
    cy.get('#product-price-542 > .price').contains('$29.00');
    cy.get('.stock > span').contains('In stock');
    cy.get('#option-label-size-143-item-168').click();
    cy.get('#option-label-color-93-item-60').click();
    cy.get('#qty').clear().type('4');
    cy.get('#product-addtocart-button').click();
  });
});