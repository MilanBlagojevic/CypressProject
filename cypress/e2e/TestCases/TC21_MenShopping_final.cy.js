/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";

describe("TC21 - Men_Shopping", () => {
  const homePage = new HomePageActions();

  beforeEach(() => {
    homePage.navigateToURL();
  });

  it("Validate Title of the Page", () => {
    homePage.validateTitle().should("eq", "Home Page");
  });

  it("Add to Cart functionality", () => {

    cy.get('#ui-id-5 > :nth-child(2)').click();
    cy.get('.categories-menu > :nth-child(4) > :nth-child(2) > a').click();
    cy.get(':nth-child(4) > .toolbar-sorter > #sorter').select('Price');

    cy.get(':nth-child(6) > .product-item-info > .details > .name > .product-item-link').click();
    cy.get('#product-price-950 > .price').contains('$32.00');
    cy.get('.stock > span').contains('In stock');
    cy.get('#option-label-size-143-item-175').click();
    cy.get('#option-label-color-93-item-58').click();
    cy.get('#qty').clear().type('3');
    cy.get('#product-addtocart-button').click();


    cy.wait(2000);

    cy.get('.message-success > div > a').click();

    cy.wait(4000);

    cy.get('.checkout-methods-items > :nth-child(1) > .action > span').click();

    cy.wait(5000);

    cy.get('#customer-email-fieldset > .required > .control > #customer-email').type('milan.testing.938@email.com');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='firstname']").type('Milan');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='lastname']").type('Testing');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='company']").type('Testing Inc');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='street[0]']").type('Testerska 17');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='city']").type('Novi Sad');
    cy.xpath("//select[@class='select' and @name='region_id']").select('Florida');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='postcode']").type('65101');
    cy.xpath("//select[@class='select' and @name='country_id']").select('Mongolia');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='telephone']").type('0800253344556677');
    cy.get(':nth-child(1) > :nth-child(1) > .radio').check();
    cy.get('.button > span').click();

    cy.wait(2000);

    cy.get('.button > span').click();

    cy.wait(2000);

    cy.get('.sub > .amount > .price').should('contain','$96.00');
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action > span').click();
  });
});