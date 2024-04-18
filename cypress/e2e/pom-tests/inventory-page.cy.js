/// <reference types="cypress" />
import InventoryPage from "../../page-objects/pages/InventoryPage";

describe('Work with inventory page', () => {
    beforeEach(() => {
        InventoryPage.open();
    })
    it('Items are present on page', () => {
        InventoryPage.burgerMenu.should('be.visible');
        InventoryPage.shoppingCart.should('be.visible');
        InventoryPage.sortingDropdown.should('be.visible');
    })
    it('Dropdown has 4 options', () => {
        InventoryPage.sortingDropdown.find('option').should('have.length', 4);
    })
    it('Items are present on page', () => {
        InventoryPage.shoppingCart.click().url().should('eq','https://www.saucedemo.com/cart.html');
    })
    it('Find item by name', () => {
        InventoryPage.allItems.contains('Sauce Labs Backpack').click();
    })

})