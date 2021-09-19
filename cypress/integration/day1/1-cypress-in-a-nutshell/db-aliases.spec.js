/// <reference types="cypress" />

// Task #5

beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
    // cy.fixture('todos.json').as('tasks')
})

it('Anti Pattern', function () {
    cy.fixture('todos.json').as('tasks')
    // use the special '@' syntax to access aliases
    // which avoids the use of 'this'
    // cy.get('@tasks').then((tasks) => {
    // access the users argument
    const task = this.tasks[0]

    cy.get('[data-test=new-todo]')
        .type(`${task.todo}{enter}`)
        .get('.todo-list li')
        .should('have.length', 3)
        .last()
        .should('have.text', `${task.todo}`)
})
