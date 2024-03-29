/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import ShoppingPageActions from "../../PageObjects/PageActions/ShoppingPageActions.cy";
import ShoppingPageElements from "../../PageObjects/PageElements/ShoppingPageElements.cy";

describe("TC21 - Men_Shopping", () => {
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

    homePage.menPage();
    homePage.menShortsPage();
    shopPageElements.sortByDropDown().select('Price');
    shopPageElements.lonoYogaShorts().click();
    shopPageElements.lonoYogaShortsPrice().contains('$32.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.size32().click();
    shopPageElements.colorRed().click();
    shopPageElements.quantityField().clear().type('3');
    shopPage.addToCart();


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