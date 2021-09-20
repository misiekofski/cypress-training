/// <reference types="cypress" />
// Task #3

describe('multiple users test', () => {
  // We cannot load JSON file using "cy.fixture"
  // because it means the test is already running.
  // Same with using "before" hook - new tests cannot be created from "before" hook.
  // Instead we need to load JSON file using "require" at the start time  
  const users = require('../../../fixtures/userlogins');

  users.forEach((user) => {
      it(`logs user: ${user.email}`, () => {
        cy.visit('https://portal.vizlib.com/auth/login');
        cy.get('input[formcontrolname="email"]').type(user.email);
        cy.get('.mat-button-wrapper').click();
        cy.get('input[formcontrolname="password"]').type(user.password);
        cy.get('.mat-button-wrapper').click();

        cy.get('span.username').should('have.text', user.fullname);
      })
  })
})