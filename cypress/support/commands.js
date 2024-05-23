// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Nopcommerce demo
// Cypress.Commands.add('login', (username,pw) =>
// {
//         cy.visit("https://demo.nopcommerce.com/")
//         cy.get('.ico-login').click()

//         //cy.get("form[method='post'] div[class='title']").should('be.visible')
//         cy.get('#Email').type(username)
//         cy.get('#Password').type(pw)
//         cy.get("button[class='button-1 login-button']").click()
//         // .log('Login is successfull')
// })



Cypress.Commands.add('loginHRM', (username, password) => {
        cy.visit("/auth/login")
        cy.get('input[name="username"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.get("button[type='submit']").click()
  
})






