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
        cy.get("input[placeholder='Username']").type(username)
        cy.get("input[placeholder='Password']").type(password)
        cy.get("button[type='submit']").click()
  
})

// Cypress.Commands.overwrite('reload', (originalFn, options) => {
//         // Kiểm tra xem đã có thông tin đăng nhập trong localStorage chưa
//         const token = window.localStorage.getItem('token')
      
//         if (token) {
//           // Nếu có token, sử dụng nó để bypass đăng nhập và reload trang
//           return cy.request({
//             method: 'POST',
//             url: '/admin/saveSystemUser', // Endpoint đăng nhập của bạn
//             body: {
//               // Thông tin đăng nhập (có thể được truyền qua options nếu cần)
//               username: options.username,
//               password: options.password
//             },
//             failOnStatusCode: false // Cho phép xử lý mã lỗi không thành công
//           }).then((response) => {
//             // Lưu lại token mới nếu đăng nhập thành công
//             if (response.status === 200) {
//               window.localStorage.setItem('token', response.body.token)
//             } else {
//               // Xử lý khi đăng nhập không thành công
//               throw new Error(`Failed to login with status: ${response.status}`)
//             }
      
//             // Sau khi đăng nhập thành công, reload trang
//             originalFn(options)
//           });
//         } else {
//           // Nếu không có token, chỉ reload trang mà không cần đăng nhập
//           originalFn(options)
//         }
//       });




