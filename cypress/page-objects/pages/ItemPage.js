/// <reference types="cypress" />
import LoginPage from "./LoginPage";
import BasePage from "./BasePage";
import userData from "../../fixtures/userData.json";
import InventoryPage from "./InventoryPage";

class ItemPage extends BasePage{
    get imageProduct(){
        return cy.get('[data-test="item-sauce-labs-backpack-img"]');
    }
    get descriptionProduct(){
        return cy.get('[data-test="inventory-item-desc"]');
    }
    get priceProduct(){
        return cy.get('[data-test="inventory-item-price"]');
    }
    get nameProduct(){
        return cy.get('[data-test="inventory-item-name"]');
    }
    get addToCard(){
        return cy.get('[data-test="add-to-cart"]');
    }
    get remove(){
        return cy.get('[data-test="remove"]');
    }
    
    
    open(){
        super.open('')
        LoginPage.login(userData.userName.correctUser, userData.password.correctPassword);
        InventoryPage.allItems.contains('Sauce Labs Backpack').click();
    }
}

export default new ItemPage();


