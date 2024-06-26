describe("Add User", () => {

    beforeEach(function () {
      cy.fixture('data-admin.json').then((data) => {
        const { username, password } = data
        cy.loginHRM(username, password);
        cy.url().should("include", "/dashboard/index") 
      })
    })
  
    it('User addition successful', () => {
      cy.visit("/admin/saveSystemUser")
      cy.get("form > div:nth-of-type(1) > div > div:nth-of-type(1) i").click() //User role
      cy.get('[role="listbox"]').contains("Admin").click()
      cy.get("div:nth-of-type(3) i").click() //Status
      cy.get('[role="listbox"]').contains("Enabled").click()
      cy.get("input[placeholder='Type for hints...']").type("john") //Employee name
  
      //cy.get('[role="listbox"]').should('contain', 'john').contains("John Knox").click() // select name
      //cy.get('div.oxd-autocomplete-dropdown.--positon-bottom').should('contain', 'John').should('have.value', "").click() // select any name
      cy.get('[role="listbox"]').contains('john', { matchCase: false }).should('have.value', "").click()
      
      
      //random user name
      function user_name() {
        var text = ""
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length))
  
        return text
      }
      const username = user_name()
  
  
      cy.get("div:nth-of-type(4) input").type(username) //User name
  
      cy.get("div.user-password-cell input").type("Admin@123")  //Password
  
      cy.get("div.user-password-row > div > div:nth-of-type(2) input").type("Admin@123") //Confirm password
  
      cy.get("button[type='submit']").click()
      cy.get("div.oxd-toast-content").should('contain', 'Success')
      cy.get("div.oxd-toast-content").should('contain', 'Successfully Saved')
  
    })
  
  });
  
  