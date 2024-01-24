/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";

describe("TC25 - Sale_Shopping", () => {
  const homePage = new HomePageActions();

  beforeEach(() => {
    homePage.navigateToURL();
  });

  it("Validate Title of the Page", () => {
    homePage.validateTitle().should("eq", "Home Page");
  });

  it("Shopping functionality", () => {
    cy.contains('Sale').click({force: true});

    cy.get('.sale-main > .content > .more').click();
    cy.get(':nth-child(4) > .toolbar-sorter > #sorter').select('Price');
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').click();
    cy.get('#product-price-1983 > .price').contains('$28.00');
    cy.get('#option-label-size-143-item-173').click();
    cy.get('#option-label-color-93-item-60').click();
    cy.get('#qty').clear().type('2');
    cy.get('#product-addtocart-button > span').click();

    cy.contains('Sale').click({force: true});

    cy.get('.sale-mens > .content > .more').click();
    cy.get(':nth-child(4) > .toolbar-sorter > #sorter').select('Price');
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').click();
    cy.get('#product-price-1028 > .price').contains('$27.00');
    cy.get('#option-label-size-143-item-178').click();
    cy.get('#option-label-color-93-item-58').click();
    cy.get('#qty').clear().type('3');
    cy.get('#product-addtocart-button').click();

    cy.contains('Sale').click({force: true});

    cy.get('.sale-womens-t-shirts > .content > .more').click();
    cy.get(':nth-child(4) > .toolbar-sorter > #sorter').select('Price');
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').click();
    cy.get('#product-price-1556 > .price').contains('$22.00');
    cy.get('#option-label-size-143-item-166').click();
    cy.get('#option-label-color-93-item-57').click();
    cy.get('#qty').clear().type('4');
    cy.get('#product-addtocart-button').click();

    cy.wait(2000);

    cy.get('.messages > :nth-child(1) > div > a').click();

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

    cy.wait(5000);

    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action > span').click();
  });
});