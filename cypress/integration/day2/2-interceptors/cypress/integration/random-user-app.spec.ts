describe('random user app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('`Loading …` is displayed then image', () => {
    cy.contains('#root', /Loading/);
    cy.get('#root > img').should('have.attr', 'alt', 'random user')
  })

  it('verifies existing of title attribute', () => {
    cy.get('#root > img').should('have.attr', 'title').should('match', /Paulo da Rosa/)
  })
})

