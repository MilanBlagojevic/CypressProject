/// <reference types="cypress" />

const or = require('../../locators.json')

export default class HomePageElements{


    customerLogin(){

        return cy.get(or.homepage.customerLogin)
    }

    customerRegister(){

        return cy.xpath(or.homepage.customerRegister)
    }
}