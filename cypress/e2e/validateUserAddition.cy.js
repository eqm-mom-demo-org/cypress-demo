describe("Validate user addition", () => {

  before(function () {
    // Đăng nhập chỉ một lần và lưu trạng thái đăng nhập vào Local Storage
    cy.fixture('data-admin.json').then((data) => {
      const { username, password } = data

      cy.loginHRM(username, password); 
      cy.url().should("include", "/dashboard/index") 

      // Lưu trạng thái đăng nhập vào Local Storage
      localStorage.setItem('loggedIn', 'true')
    })
  })

  beforeEach(() => {
    // Kiểm tra trạng thái đăng nhập từ Local Storage trước khi mỗi test case bắt đầu
    const isLoggedIn = localStorage.getItem('loggedIn')

    if (!isLoggedIn) {
      // Nếu chưa đăng nhập, thực hiện đăng nhập lại
      cy.fixture('data-admin.json').then((data) => {
        const { username, password } = data
        cy.loginHRM(username, password); 
        cy.url().should("include", "/dashboard") 

        // Lưu lại trạng thái đăng nhập vào Local Storage
        localStorage.setItem('loggedIn', 'true')
      })
    }
  })

  it('Test case 1: Verify the validation for all fields have been left empty', () => {
    cy.visit("/admin/saveSystemUser")
    cy.get("form > div:nth-of-type(1) > div > div:nth-of-type(1) i").click()
    cy.get("button[type='submit']").click()
    cy.get("form > div:nth-of-type(1) > div > div:nth-of-type(1) span").should('contain', 'Required')
    cy.get("form > div:nth-of-type(1) > div > div:nth-of-type(2) span").should('contain', 'Required')
    cy.get("div:nth-of-type(3) span").should('contain', 'Required')
    cy.get("div:nth-of-type(4) span").should('contain', 'Required')
    cy.get("div.user-password-cell span").should('contain', 'Required')
    cy.get("div.user-password-row > div > div:nth-of-type(2) span").should('contain', 'Passwords do not match')

  })

  it('Test case 2: Verify the validation for Employee Name Not Found', () => {
    cy.visit("/admin/saveSystemUser")
    cy.get("input[placeholder='Type for hints...']").type("adminnn")
    cy.get('[role="listbox"]').should('contain', 'No Records Found')
    cy.get('body').click()
    cy.get("form > div:nth-of-type(1) > div > div:nth-of-type(2) span").should('contain', 'Invalid')
  })


  it('Test case 3: Verify the validation for Username', () => {
    cy.visit("/admin/saveSystemUser")
    cy.get("div:nth-of-type(4) input").type("demo")
    cy.get("div:nth-of-type(4) span").should('contain', 'Should be at least 5 characters') // < 5 chars
    cy.get("div:nth-of-type(4) input").clear()
    cy.get("div:nth-of-type(4) input").type("admin")
    cy.get("div:nth-of-type(4) span").should('contain', 'Already exists') //user is existed
  })


  it('Test case 4: Verify the validation for Password', () => {
    cy.visit("/admin/saveSystemUser")
    cy.get("div.user-password-cell input").type("admin")     // < 7 chars
    cy.get("div.user-password-cell span").should('contain', 'Should have at least 7 characters')
    cy.get('.oxd-chip').should('contain', 'Very Weak')

    cy.get("div.user-password-cell input").clear()
    cy.get("div.user-password-cell input").type("admindemo") // > 7 chars
    cy.get("div.user-password-cell span").should('contain', 'Your password must contain minimum 1 number')
    cy.get('.oxd-chip').should('contain', 'Better')

    cy.get("div.user-password-cell input").clear()
    cy.get("div.user-password-cell input").type("Admindemo") //lowercase, uppercase
    cy.get('.oxd-chip').should('contain', 'Better')

    cy.get("div.user-password-cell input").clear()
    cy.get("div.user-password-cell input").type("Admindemo123") //lowercase, uppercase, number
    cy.get('.oxd-chip').should('contain', 'Strong')

    cy.get("div.user-password-cell input").clear()
    cy.get("div.user-password-cell input").type("Admin@123") //lowercase, uppercase, number, symbol
    cy.get('.oxd-chip').should('contain', 'Better')
  })


  it('Test case 5: Verify the validation for Confirm Password', () => {
    cy.visit("/admin/saveSystemUser")
    cy.get("div.user-password-row > div > div:nth-of-type(2) input").type("Admin@1")
    cy.get("div.user-password-row > div > div:nth-of-type(2) span").should('contain', 'Passwords do not match')
  })

})