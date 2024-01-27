/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import ShoppingPageActions from "../../PageObjects/PageActions/ShoppingPageActions.cy";
import ShoppingPageElements from "../../PageObjects/PageElements/ShoppingPageElements.cy";

describe("TC25 - Sale_Shopping", () => {
  const homePage = new HomePageActions();
  const shopPage = new ShoppingPageActions();
  const shopPageElements = new ShoppingPageElements();

  beforeEach(() => {
    homePage.navigateToURL();
  });

  it("Validate Title of the Page", () => {
    homePage.validateTitle().should("eq", "Home Page");
  });

  it("Shopping functionality", () => {
    cy.contains('Sale').click({force: true});

    homePage.salePage();
    homePage.womenDealsPage();
    shopPageElements.sortByDropDown().select('Price');
    shopPageElements.bessaYogaShort().click();
    shopPageElements.bessaYogaShortPrice().contains('$28.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.size28().click();
    shopPageElements.colorPurple().click();
    shopPageElements.quantityField().clear().type('3');
    shopPage.addToCart();

    homePage.salePage();
    homePage.menDealsPage();
    shopPageElements.sortByDropDown().select('Price');
    shopPageElements.pierceGymShort().click();
    shopPageElements.pierceGymShortPrice().contains('$27.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.size36().click();
    shopPageElements.colorBlack().click();
    shopPageElements.quantityField().clear().type('6');
    shopPage.addToCart();

    homePage.salePage();
    homePage.lumaDealsPage();
    shopPageElements.fusionBackpack().click();
    shopPageElements.fusionBackpackPrice().contains('$59.00');
    shopPageElements.inStock().contains('In stock');
    shopPageElements.quantityField().clear().type('4');
    shopPage.addToCart();

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