/// <reference types="cypress" />

// Task #1

context('Procedural test into Page Object Pattern', () => {
    beforeEach(() => {
      cy.visit('');
    })
  
    
    it('procedural tests to rewrite it to Page Object Pattern', () => {
        cy.get('.username').type('my username');
        cy.get('.password').type('my password');
        cy.get('button').click();
    })
})
