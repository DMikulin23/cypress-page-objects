/// <reference types="cypress" />

import LoginPage from "../../page-objects/pages/LoginPage";

describe('exemple', () => {
    beforeEach(() => {
        LoginPage.open();
    })
    it.only('Login with incorrect login and password', () => {
        LoginPage.login('test','test')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    })
    it('Login without login and password', () => {
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
    })
    it('Login locked user', () => {
        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    })
    it('Login with correct login and password', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    })
})