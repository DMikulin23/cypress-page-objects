/// <reference types="cypress" />
import LoginPage from "./LoginPage";
import BasePage from "./BasePage";
import userData from "../../fixtures/userData.json";

class InventoryPage extends BasePage {
    get burgerMenu() {
        return cy.get('button#react-burger-menu-btn');
    }
    get shoppingCart() {
        return cy.get('[data-test="shopping-cart-link"]');
    }
    get sortingDropdown() {
        return cy.get('select.product_sort_container');
    }
    get allItems() {
        return cy.get('[data-test="inventory-item-name"]')
    }


    open() {
        super.open('');
        LoginPage.login(userData.userName.correctUser, userData.password.correctPassword);

    }
    selectSortingOption(option) {
        this.sortingDropdown.select(option);
    }
}
export default new InventoryPage();