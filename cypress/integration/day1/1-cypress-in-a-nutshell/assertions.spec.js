/// <reference types="cypress" />

// Task #2
const todos = ['Learn Cypress', 'Make a break', 'Use more Cypress']

describe('Multiple assertions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it(`Should add todos`, () => {
    todos.forEach((todo) => {
      cy.get('[data-test=new-todo]')
        .type(`${todo}{enter}`)
        .get('.todo-list li')
        // .should('have.length', 2)
        .last()
        // .should('have.text', )
    })
  })
})
