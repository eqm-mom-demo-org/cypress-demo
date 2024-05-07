describe("Validation Add", () => {
  before(function () {
    cy.fixture('data-admin.json').as('dataAdmin')
  });

  beforeEach(function () {

    const { username, password } = this.dataAdmin
    cy.loginHRM(username, password)
    cy.location("href").should("includes", "/dashboard/index")

  })

  it('Test case 1: Check Validation null', () => {
    cy.get("li:nth-of-type(1) > a").click();
    cy.location("href").should("includes", "/admin/viewSystemUsers")
    cy.get("div.orangehrm-header-container > button").click()
    cy.location("href").should("includes", "/admin/saveSystemUser")
    cy.get("form > div:nth-of-type(1) > div > div:nth-of-type(1) i").click()

    cy.get("button[type='submit']").click()
    cy.get("form > div:nth-of-type(1) > div > div:nth-of-type(1) span").should('contain', 'Required')
    cy.get("form > div:nth-of-type(1) > div > div:nth-of-type(2) span").should('contain', 'Required')
    cy.get("div:nth-of-type(3) span").should('contain', 'Required')
    cy.get("div:nth-of-type(4) span").should('contain', 'Required')
    cy.get("div.user-password-cell span").should('contain', 'Required')
    cy.get("div.user-password-row > div > div:nth-of-type(2) span").should('contain', 'Passwords do not match')

  })

  it('Test case 2: Not found Employee name', () => {
    cy.visit("/admin/saveSystemUser");
    cy.get("input[placeholder='Type for hints...']").type("adminnn")
    cy.get('[role="listbox"]').should('contain', 'No Records Found')
    cy.get('body').click()
    cy.get("form > div:nth-of-type(1) > div > div:nth-of-type(2) span").should('contain', 'Invalid')
  })

  // //Validation User name
  // it('Validation User name', () => {
  //   cy.get("div:nth-of-type(4) input").type("demo")
  //   cy.get("div:nth-of-type(4) span").should('contain', 'Should be at least 5 characters') // < 5 chars
  //   cy.get("div:nth-of-type(4) input").clear()
  //   cy.get("div:nth-of-type(4) input").type("admin")
  //   cy.get("div:nth-of-type(4) span").should('contain', 'Already exists') //user is existed
  // })

  // //Validation Password
  // it('Validation Password', () => {
  //   cy.get("div.user-password-cell input").type("admin")     // < 7 chars
  //   cy.get("div.user-password-cell span").should('contain', 'Should have at least 7 characters')
  //   cy.get('.oxd-chip').should('contain', 'Very Weak')

  //   cy.get("div.user-password-cell input").clear()
  //   cy.get("div.user-password-cell input").type("admindemo") // > 7 chars
  //   cy.get("div.user-password-cell span").should('contain', 'Your password must contain minimum 1 number')
  //   cy.get('.oxd-chip').should('contain', 'Better')

  //   cy.get("div.user-password-cell input").clear()
  //   cy.get("div.user-password-cell input").type("Admindemo") //lowercase, uppercase
  //   cy.get('.oxd-chip').should('contain', 'Better')

  //   cy.get("div.user-password-cell input").clear()
  //   cy.get("div.user-password-cell input").type("Admindemo123") //lowercase, uppercase, number
  //   cy.get('.oxd-chip').should('contain', 'Strong')

  //   cy.get("div.user-password-cell input").clear()
  //   cy.get("div.user-password-cell input").type("Admin@123") //lowercase, uppercase, number, symbol
  //   cy.get('.oxd-chip').should('contain', 'Better')
  // })

  // //Confirm Password
  // it('Confirm Password', () => {
  //   cy.get("div.user-password-row > div > div:nth-of-type(2) input").type("Admin@1", {
  //     log: false,
  //   })
  //   cy.get("div.user-password-row > div > div:nth-of-type(2) span").should('contain', 'Passwords do not match')

  // })
})