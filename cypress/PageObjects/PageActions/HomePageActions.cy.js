/// <reference types="cypress" />

import HomePageElements from "../PageElements/HomePageElements.cy";

export default class HomePageActions {
  constructor() {
    globalThis.homepageelement = new HomePageElements();
  }

  navigateToURL() {
    cy.visit("/");
  }

  validateTitle() {
    return cy.title();
  }

  loginAsCustomer() {
    homepageelement.customerLogin().click();
  }

  registerAsCustomer() {
    homepageelement.customerRegister().click();
  }
  whatsNewPage() {
    homepageelement.whatsNewTab().click();
  }
  womenPage(){
    homepageelement.womenTab().click();
  }
  womenJacketsPage(){
    homepageelement.womenJackets().click();
  }
  womenHoodiesPage(){
    homepageelement.womenHoodies().click();
  }
  womenTeesPage(){
    homepageelement.womenTees().click();
  }
  womenTanksPage(){
    homepageelement.womenTanks().click();
  }
  womenPantsPage(){
    homepageelement.womenPants().click();
  }
  womenShortsPage(){
    homepageelement.womenShorts().click();
  }

  menPage(){
    homepageelement.menTab().click();
  }
  menJacketsPage(){
    homepageelement.menJackets().click();
  }
  menHoodiesPage(){
    homepageelement.menHoodies().click();
  }
  menTeesPage(){
    homepageelement.menTees().click();
  }
  menTanksPage(){
    homepageelement.menTanks().click();
  }
  menPantsPage(){
    homepageelement.menPants().click();
  }
  menShortsPage(){
    homepageelement.menShorts().click();
  }
  gearPage(){
    homepageelement.gearTab().click();
  }
  gearBagsPage(){
    homepageelement.gearBags().click();
  }
  gearFitnessPage(){
    homepageelement.gearFitness().click();
  }
  gearWatchesPage(){
    homepageelement.gearWatches().click();
  }
  salePage(){
    homepageelement.saleTab().click();
  }
  womenDealsPage(){
    homepageelement.womenDeals().click();
  }
  menDealsPage(){
    homepageelement.menDeals().click();
  }
  lumaDealsPage(){
    homepageelement.lumaDeals().click();
  }
}
