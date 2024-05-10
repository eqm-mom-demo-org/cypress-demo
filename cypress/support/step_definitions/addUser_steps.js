import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from './login_steps';

// loginPage();

When(`Navigate to the user addition page`, () => {
    cy.visit("/admin/saveSystemUser")
});

When(`Set the user role as {string}`, (role) => {
    cy.get("form > div:nth-of-type(1) > div > div:nth-of-type(1) i").click()
    cy.get('[role="listbox"]').contains(role).click()
});

When(`Set the status to {string}`, (status) => {
    cy.get("div:nth-of-type(3) i").click()
    cy.get('[role="listbox"]').contains(status).click()
});

When(`Enter an employee name {string} and select any name from the search results`, (name) => {
    cy.get("input[placeholder='Type for hints...']").type(name)
    cy.get('[role="listbox"]').contains(name, { matchCase: false }).should('have.value', "").click()
});


When(`Generate a random username`, () => {
    function user_name() {
        var text = ""
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length))

        return text
    }
    const username = user_name()

    cy.get("div:nth-of-type(4) input").type(username)
});

When(`Enter the password and confirm password`, () => {
    cy.get("div.user-password-cell input").type("Admin@123")
    cy.get("div.user-password-row > div > div:nth-of-type(2) input").type("Admin@123")
});

When(`Click on the Save button`, () => {
    cy.get("button[type='submit']").click()
});

Then(`Should see a success message confirming the user was added successfully`, () => {
    cy.get("div.oxd-toast-content").should('contain', 'Success')
    cy.get("div.oxd-toast-content").should('contain', 'Successfully Saved')

});