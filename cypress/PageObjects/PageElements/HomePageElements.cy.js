/// <reference types="cypress" />

const or = require("../../locators.json");

export default class HomePageElements {
  customerLogin() {
    return cy.xpath(or.homepage.customerLogin);
  }

  customerRegister() {
    return cy.xpath(or.homepage.customerRegister);
  }
  whatsNewTab() {
    return cy.get(or.homepage.whatsNew);
  }
}
