describe("Login", () => {
    before(function () {
        cy.fixture('data-admin.json').as('dataAdmin')
    });

    it("Login successful", function () {
        const { username, password } = this.dataAdmin
        cy.loginHRM(username, password)
        cy.url().should("include", "/dashboard/index") 
    })
})