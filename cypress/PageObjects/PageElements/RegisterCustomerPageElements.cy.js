/// <reference types="cypress" />

const or = require('../../locators.json')

export default class RegisterCustomerPageElements{

    firstNameField(){

        return cy.get(or.registercustomerpage.firstName)
    }

    lastNameField(){

        return cy.get(or.registercustomerpage.lastName)
    }

    emailField(){

        return cy.get(or.registercustomerpage.email)
    }

    passwordField(){

        return cy.get(or.registercustomerpage.password)
    }

    passwordConfirmField(){

        return cy.get(or.registercustomerpage.passwordConfirm)
    }

    createAccountBtn(){

        cy.get(or.registercustomerpage.createAccountBtn)
    }
}