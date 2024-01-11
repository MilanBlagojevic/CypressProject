/// <reference types="cypress" />

describe('Test functionality',()=>{

    it('Visit specified URL',()=>{

        cy.visit('https://www.google.com/');
        
    })
})