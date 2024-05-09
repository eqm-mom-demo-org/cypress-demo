const { Then, Given } = require("@badeball/cypress-cucumber-preprocessor");

Given('Log in with valid credentials', () => {
    cy.fixture('data-admin.json').then((dataAdmin) => {
        const { username, password } = dataAdmin;
        cy.loginHRM(username, password);

    });
});

Then(`Should be redirected to the dashboard`, () => {
    cy.url().should('include', '/dashboard/index');
});