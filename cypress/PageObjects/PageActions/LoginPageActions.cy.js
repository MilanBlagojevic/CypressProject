/// <reference types="cypress" />

import LoginPageElements from "../PageElements/LoginPageElements.cy";

export default class LoginPageActions {
  constructor() {
    globalThis.loginpageelement = new LoginPageElements();
  }

  loginCustomerDetails(loginEmail, loginPassword) {
    loginpageelement.loginEmailField().type(loginEmail);
    loginpageelement.loginPasswordField().type(loginPassword);
    loginpageelement.signInButton().click();
  }
}
