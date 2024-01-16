/// <reference types="cypress" />

import HomePageElements from "../PageElements/HomePageElements.cy";

export default class HomePageActions {
  constructor() {
    globalThis.homepageelement = new HomePageElements();
  }

  navigateToURL() {
    cy.visit("/");
  }

  validateTitle() {
    return cy.title();
  }

  loginAsCustomer() {
    homepageelement.customerLogin().click();
  }

  registerAsCustomer() {
    homepageelement.customerRegister().click();
  }
}
