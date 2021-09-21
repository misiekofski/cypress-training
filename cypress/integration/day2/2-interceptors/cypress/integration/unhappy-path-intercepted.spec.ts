describe('unhappy path', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('https://randomuser.me/api', {
      statusCode: 500,
    }).as('unhappyPath')
  })

  it('displays information about error if response is not successful', () => {
    cy.get('#root').should('contain.text', 'Loading …');
    cy.get('#root').should('contain.text', 'Error!');
  })

  it('different approach to verify what status application displays', () => {
    cy.contains('#root', /loading/i);
    cy.contains('#root', /error/i);
  })
})
