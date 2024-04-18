/// <reference types="cypress" />
import ItemPage from "../../page-objects/pages/ItemPage";

describe('Work with item page', () => {
    beforeEach(() => {
        ItemPage.open()

    })
    it('Item has image, description, price, name', () => {
        ItemPage.imageProduct.should('be.visible');
        ItemPage.descriptionProduct.should('be.visible');
        ItemPage.priceProduct.should('be.visible');
        ItemPage.nameProduct.should('be.visible');
    })
    it('If click Add to card, Remove will be visible', () => {
        ItemPage.addToCard.click();
        ItemPage.remove.should('be.visible');

    })
    it('If click Remove, Add to card will be visible', () => {
        ItemPage.addToCard.click();
        ItemPage.remove.click();
        ItemPage.addToCard.should('be.visible');

    })
})