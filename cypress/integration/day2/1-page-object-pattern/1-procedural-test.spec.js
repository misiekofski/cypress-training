/// <reference types="cypress" />

// Task #1

context('Procedural test into Page Object Pattern', () => {
    beforeEach(() => {
      cy.visit('https://portal.vizlib.com/auth/login');
    })
  
    
    it('procedural tests to rewrite it to Page Object Pattern', () => {
        cy.get('#mat-input-0').type('dobrzycki@gmail.com');
        cy.get('.mat-button-wrapper').click();
        cy.get('#mat-input-9').type('test12345');
        cy.get('.mat-button-wrapper').click();
    })
})
