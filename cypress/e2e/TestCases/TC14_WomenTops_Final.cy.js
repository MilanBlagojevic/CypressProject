/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import ShoppingPageActions from "../../PageObjects/PageActions/ShoppingPageActions.cy";
import ShoppingPageElements from "../../PageObjects/PageElements/ShoppingPageElements.cy";

describe("TC14 - Women_Final", () => {
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
    homePage.womenTanksPage();
    shopPageElements.sortByDropDown().select('Price');
    shopPageElements.zoeTank().click();
    shopPageElements.zoeTankPrice().contains('$29.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.sizeXL().click();
    shopPageElements.colorOrange().click();
    shopPageElements.quantityField().clear().type('5');
    shopPage.addToCart();

    cy.wait(2000);

    cy.get('.message-success > div > a').click();

    cy.wait(4000);

    cy.get('.checkout-methods-items > :nth-child(1) > .action > span').click();

    cy.wait(5000);

    cy.get('#customer-email-fieldset > .required > .control > #customer-email').type('milan.testing.978@email.com');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='firstname']").type('Milan');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='lastname']").type('Testing');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='company']").type('Testing Inc');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='street[0]']").type('Testerska 17');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='city']").type('Novi Sad');
    cy.xpath("//select[@class='select' and @name='region_id']").select('Florida');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='postcode']").type('63101');
    cy.xpath("//select[@class='select' and @name='country_id']").select('Mongolia');
    cy.xpath("//input[@class='input-text' and @type='text' and @name='telephone']").type('0800223344556677');
    cy.get(':nth-child(1) > :nth-child(1) > .radio').check();
    cy.get('.button > span').click();

    cy.wait(2000);

    cy.get('.button > span').click();

    cy.wait(2000);

    cy.get('.sub > .amount > .price').should('contain','$145.00');
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action > span').click();
  });
});