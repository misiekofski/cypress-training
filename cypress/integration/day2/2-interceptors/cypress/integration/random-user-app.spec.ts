describe.only('random user app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows `Loading …` text', () => {
    cy.contains('#root', /Loading/);
  })

  it('verifies existing of alt attribute', () => {
    //
  })

  it('verifies existing of title attribute', () => {
    cy.get('#root > img').should('have.attr', 'title').should('match', /Paulo da Rosa/)
  })
})

