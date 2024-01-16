/// <reference types="cypress" />

const or = require("../../locators.json");

export default class LoginPageElements {
  loginEmailField() {
    return cy.get(or.logincustomerpage.loginEmail);
  }

  loginPasswordField() {
    return cy.get(or.logincustomerpage.loginPassword);
  }
  signInButton() {
    return cy.xpath(or.logincustomerpage.signInSubmit);
  }
}
