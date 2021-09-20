/// <reference types="cypress" />

// Task #1

context('Procedural test into Page Object Pattern', () => {
    beforeEach(() => {
      cy.visit('https://portal.vizlib.com/auth/login');
    })
  
    
    it('procedural tests to rewrite it to Page Object Pattern', () => {
        cy.get('input[formcontrolname="email"]').type('dobrzycki@gmail.com');
        cy.get('.mat-button-wrapper').click();
        cy.get('input[formcontrolname="password"]').type('test12345');
        cy.get('.mat-button-wrapper').click();

        cy.get('span.username').should('have.text', 'Michal Dobrzycki');
    })
})
