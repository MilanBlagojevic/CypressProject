/// <reference types="cypress" />

import RegisterCustomerPageElements from "../PageElements/RegisterCustomerPageElements.cy";

export default class RegisterCustomerPageActions {
  constructor() {
    globalThis.addcustelement = new RegisterCustomerPageElements();
  }

  addCustomerDetails(firstName, lastName, email, password, passwordConfirm) {
    addcustelement.firstNameField().type(firstName);
    addcustelement.lastNameField().type(lastName);
    addcustelement.emailField().type(email);
    addcustelement.passwordField().type(password);
    addcustelement.passwordConfirmField().type(passwordConfirm);
    addcustelement.createAccountButton().click();
    addcustelement.passwordConfirmField().clear().type(passwordConfirm);
    addcustelement.createAccountButton().click();
  }
}
