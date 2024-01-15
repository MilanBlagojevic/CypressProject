/// <reference types="cypress" />

import HomePageElements from "../PageElements/HomePageElements";

export default class HomePageActions{


    constructor(){

        globalThis.element = new HomePageElements()
    }

    navigateToURL(){

        cy.visit('https://magento.softwaretestingboard.com/');
    }

    validateTitle(){

        return cy.title()
    }

    loginAsCustomer(){

        element.CustomerLogin().click()
    }

    registerAsCustomer(){

        element.customerRegister().click()
    }

}