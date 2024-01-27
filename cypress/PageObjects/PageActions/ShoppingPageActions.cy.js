/// <reference types="cypress" />

import ShoppingPageElements from "../PageElements/ShoppingPageElements.cy";

export default class ShoppingPageActions{
    constructor(){
        globalThis.shoppingpageelement = new ShoppingPageElements();
    }

    addToCart(){
        return shoppingpageelement.addToCartButton().click();
    }
}