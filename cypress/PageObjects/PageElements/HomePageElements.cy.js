/// <reference types="cypress" />

export default class HomePageElements{


    customerLogin(){

        return cy.get('ul.header:nth-child(2) > li:nth-child(2) > a:nth-child(1)')
    }

    customerRegister(){

        return cy.get('ul.header:nth-child(2) > li:nth-child(3) > a:nth-child(1)')
    }
}