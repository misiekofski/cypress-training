const hostUrl = "http://localhost:3030";

describe("Todo app", () => {
  it("Task 1 - Should add 3 todos", () => {
    cy.visit(hostUrl);
    cy.get('#showAddToDoButton').click();
    cy.get('input').type('Apple')
    cy.get('#addToDo').click();
    cy.get('#new-todo').clear()
    cy.get('input').type('Orange')
    cy.get('.#addToDo').click();
    cy.get('input').clear()
    cy.get('input').type('Banana')
    cy.get('#addToDo').click();
    cy.get('.todo-list').find('li').should('have.length', 3)
  });

  it("Task 2 - Should has button", () => {
    cy.visit(hostUrl)
    cy.get('#showAddTodoButton').contains('Click me!')
    cy.get('#showAddTodoButton').click()
    cy.get('input').type('Norbi')
  })

  it('Task 3 - Should add items', () => {
    cy.visit(hostUrl)
    cy.get('#showAddTodoButton').click();

    cy.get('input').type('Workout')
    cy.get('#addToDo').click();
    cy.get('input').clear()
    cy.get('.todo-list li').find('label').should('contain', 'Workout')

    cy.get('input').type('Shopping')
    cy.get('#addToDo').click();
    cy.get('input').clear()
    cy.get('.todo-list li').find('label').should('contain', 'Shopping')
})

});