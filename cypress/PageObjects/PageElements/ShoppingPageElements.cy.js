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
    jadeYogaJacket(){
        return cy.get(or.shoppingpage.jadeYogaJacket)
    }
    jadeYogaJacketPrice(){
        return cy.get(or.shoppingpage.jadeYogaJacketPrice)
    }


    kenobyTrailJacket(){
        return cy.get(or.shoppingpage.kenobyTrailJacket)
    }
    kenobyTrailJacketPrice(){
        return cy.get(or.shoppingpage.kenobyTrailJacketPrice)
    }
}