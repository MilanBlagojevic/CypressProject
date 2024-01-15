/// <reference types="cypress" />

import HomePageActions from "../../PageObjects/PageActions/HomePageActions.cy";
import RegisterCustomerPageActions from "../../PageObjects/PageActions/RegisterCustomerPageActions.cy";

describe('Register functionality',()=>{

    const homePage = new HomePageActions()
    const createCust = new RegisterCustomerPageActions()

    beforeEach(()=>{

        homePage.navigateToURL()


    })

    it('Validate Title of the Page',()=>{

        homePage.validateTitle().should('eq','Home Page')
       
    })

    it('Register as Customer',()=>{

        homePage.registerAsCustomer()
        createCust.addCustomerDetails("Milan","Testing","milan.testing.90@email.com", "Milantesting90","MilanTesting90")
       
    })
    
})