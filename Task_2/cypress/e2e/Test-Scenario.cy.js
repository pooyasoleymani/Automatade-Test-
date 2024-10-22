describe('Open Signup Page and Login and Loguot', () => {  
  it('passes', () => {  

    cy.visit('/signUp/signup.html')
    cy.wait(1000)
    ////////////////////////////////////////////////////////////////////////////////

    // SignUp New User
    cy.get('#email').type('example@gmail.com')
    cy.get('#firstname').type('test')
    cy.get('#lastname').type('test')
    cy.get('#birthdate').type('1990-01-01')
    cy.get('#phone').type('09129649133')
    cy.get('#password').type('test1')
    cy.get('#password-confirm').type('test1')
    cy.get('form').contains('Sign Up').click()
    cy.url().should('include', 'login')
    cy.wait(1000)
    /////////////////////////////////////////////////////////////////////////////////

    // Redirect to Login Page and Enter Email and Password
    cy.get('#login-email').type('example@gmail.com')
    cy.get('#login-password').type('test1')  
    cy.get('form').contains('Log In').click()
    cy.wait(1000)
    /////////////////////////////////////////////////////////////////////////////////

    // Verify successful login and redirect to dashboard
    cy.url().should('include', '/dashboard/dashboard.html')  
    cy.contains('Hello test!')
    cy.contains('Welcome to Your ')
    cy.contains('Sign Out')

    cy.wait(1000)
    cy.get('#sign-out-button').click() // Signout
    cy.url().should('include', '/login')

    })
})
  
