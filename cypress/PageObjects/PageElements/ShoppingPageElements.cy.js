/// <reference types="cypress" />

const or = require("../../locators.json");

export default class ShoppingPageElements{
    sortByDropDown(){
        return cy.get(or.shoppingpage.sortBy)
    }
    quantityField(){
        return cy.get(or.shoppingpage.quantity)
    }
    addToCartButton(){
        return cy.get(or.shoppingpage.addToCart)
    }
    inStock(){
        return cy.get(or.shoppingpage.inStock)
    }
    sizeXS(){
        return cy.get(or.shoppingpage.sizeXS)
    }
    sizeS(){
        return cy.get(or.shoppingpage.sizeS)
    }
    sizeM(){
        return cy.get(or.shoppingpage.sizeM)
    }
    sizeL(){
        return cy.get(or.shoppingpage.sizeL)
    }
    sizeXL(){
        return cy.get(or.shoppingpage.sizeXL)
    }
    size28(){
        return cy.get(or.shoppingpage.size28)
    }
    size29(){
        return cy.get(or.shoppingpage.size29)
    }
    size30(){
        return cy.get(or.shoppingpage.size30)
    }
    size31(){
        return cy.get(or.shoppingpage.size31)
    }
    size32(){
        return cy.get(or.shoppingpage.size32)
    }
    size33(){
        return cy.get(or.shoppingpage.size33)
    }
    size34(){
        return cy.get(or.shoppingpage.size34)
    }
    size36(){
        return cy.get(or.shoppingpage.size36)
    }
    colorBlack(){
        return cy.get(or.shoppingpage.colorBlack)
    }
    colorBlue(){
        return cy.get(or.shoppingpage.colorBlue)
    }
    colorPink(){
        return cy.get(or.shoppingpage.colorPink)
    }
    colorGreen(){
        return cy.get(or.shoppingpage.colorGreen)
    }
    colorOrange(){
        return cy.get(or.shoppingpage.colorOrange)
    }
    colorYellow(){
        return cy.get(or.shoppingpage.colorYellow)
    }
    colorGray(){
        return cy.get(or.shoppingpage.colorGray)
    }
    colorPurple(){
        return cy.get(or.shoppingpage.colorPurple)
    }
    colorRed(){
        return cy.get(or.shoppingpage.colorRed)
    }
    colorBrown(){
        return cy.get(or.shoppingpage.colorBrown)
    }
    colorWhite(){
        return cy.get(or.shoppingpage.colorWhite)
    }
    phoebeZipper(){
        return cy.get(or.shoppingpage.phoebeZipper)
    }
    phoebeZipperPrice(){
        return cy.get(or.shoppingpage.phoebeZipperPrice)
    }
    gobiHeatTee(){
        return cy.get(or.shoppingpage.gobiHeatTee)
    }
    gobiHeatTeePrice(){
        return cy.get(or.shoppingpage.gobiHeatTeePrice)
    }
    stellarSolarJacket(){
        return cy.get(or.shoppingpage.stellarSolarJacket)
    }
    stellarSolarJacketPrice(){
        return cy.get(or.shoppingpage.stellarSolarJacketPrice)
    }
    jadeYogaJacket(){
        return cy.get(or.shoppingpage.jadeYogaJacket)
    }
    jadeYogaJacketPrice(){
        return cy.get(or.shoppingpage.jadeYogaJacketPrice)
    }
    autumnPullie(){
        return cy.get(or.shoppingpage.autumnPullie)
    }
    autumnPulliePrice(){
        return cy.get(or.shoppingpage.autumnPulliePrice)
    }
    divaGymTee(){
        return cy.get(or.shoppingpage.divaGymTee)
    }
    divaGymTeePrice(){
        return cy.get(or.shoppingpage.divaGymTeePrice)
    }
    zoeTank(){
        return cy.get(or.shoppingpage.zoeTank)
    }
    zoeTankPrice(){
        return cy.get(or.shoppingpage.zoeTankPrice)
    }
    kenobyTrailJacket(){
        return cy.get(or.shoppingpage.kenobyTrailJacket)
    }
    kenobyTrailJacketPrice(){
        return cy.get(or.shoppingpage.kenobyTrailJacketPrice)
    }
    heroHoodie(){
        return cy.get(or.shoppingpage.heroHoodie)
    }
    heroHoodiePrice(){
        return cy.get(or.shoppingpage.heroHoodiePrice)
    }
    zoltanGymTee(){
        return cy.get(or.shoppingpage.zoltanGymTee)
    }
    zoltanGymTeePrice(){
        return cy.get(or.shoppingpage.zoltanGymTeePrice)
    }
    tiberiusGymTank(){
        return cy.get(or.shoppingpage.tiberiusGymTank)
    }
    tiberiusGymTankPrice(){
        return cy.get(or.shoppingpage.tiberiusGymTankPrice)
    }
    kratosGymPants(){
        return cy.get(or.shoppingpage.kratosGymPants)
    }
    kratosGymPantsPrice(){
        return cy.get(or.shoppingpage.kratosGymPantsPrice)
    }
    lonoYogaShorts(){
        return cy.get(or.shoppingpage.lonoYogaShorts)
    }
    lonoYogaShortsPrice(){
        return cy.get(or.shoppingpage.lonoYogaShortsPrice)
    }
    crownSummitBackpack(){
        return cy.get(or.shoppingpage.crownSummitBackpack)
    }
    crownSummitBackpackPrice(){
        return cy.get(or.shoppingpage.crownSummitBackpackPrice)
    }
    spriteFoamRoller(){
        return cy.get(or.shoppingpage.spriteFoamRoller)
    }
    spriteFoamRollerPrice(){
        return cy.get(or.shoppingpage.spriteFoamRollerPrice)
    }
    aimAnalogWatch(){
        return cy.get(or.shoppingpage.aimAnalogWatch)
    }
    aimAnalogWatchPrice(){
        return cy.get(or.shoppingpage.aimAnalogWatchPrice)
    }
    bessaYogaShort(){
        return cy.get(or.shoppingpage.bessaYogaShort)
    }
    bessaYogaShortPrice(){
        return cy.get(or.shoppingpage.bessaYogaShortPrice)
    }
    pierceGymShort(){
        return cy.get(or.shoppingpage.pierceGymShort)
    }
    pierceGymShortPrice(){
        return cy.get(or.shoppingpage.pierceGymShortPrice)
    }
    fusionBackpack(){
        return cy.get(or.shoppingpage.fusionBackpack)
    }
    fusionBackpackPrice(){
        return cy.get(or.shoppingpage.fusionBackpackPrice)
    }
}