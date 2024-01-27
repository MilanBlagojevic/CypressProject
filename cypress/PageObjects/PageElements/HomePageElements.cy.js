/// <reference types="cypress" />

const or = require("../../locators.json");

export default class HomePageElements {
  customerLogin() {
    return cy.xpath(or.homepage.customerLogin);
  }

  customerRegister() {
    return cy.xpath(or.homepage.customerRegister);
  }
  whatsNewTab() {
    return cy.get(or.homepage.whatsNew);
  }
  womenTab(){
    return cy.get(or.homepage.womenTab)
  }
  womenJackets(){
    return cy.get(or.homepage.womenJackets)
  }
  womenHoodies(){
    return cy.get(or.homepage.womenHoodies)
  }
  womenTees(){
    return cy.get(or.homepage.womenTees)
  }
  womenTanks(){
    return cy.get(or.homepage.womenTanks)
  }
  womenPants(){
    return cy.get(or.homepage.womenPants)
  }
  menShorts(){
    return cy.get(or.homepage.menShorts)
  }

  menTab(){
    return cy.get(or.homepage.menTab)
  }
  menJackets(){
    return cy.get(or.homepage.menJackets)
  }
  menHoodies(){
    return cy.get(or.homepage.menHoodies)
  }
  menTees(){
    return cy.get(or.homepage.menTees)
  }
  menTanks(){
    return cy.get(or.homepage.menTanks)
  }
  menPants(){
    return cy.get(or.homepage.menPants)
  }
  menShorts(){
    return cy.get(or.homepage.menShorts)
  }
  gearTab(){
    return cy.get(or.homepage.gearTab)
  }
  gearBags(){
    return cy.get(or.homepage.gearBags)
  }
  gearFitness(){
    return cy.get(or.homepage.gearFitness)
  }
  gearWatches(){
    return cy.get(or.homepage.gearWatches)
  }
}
