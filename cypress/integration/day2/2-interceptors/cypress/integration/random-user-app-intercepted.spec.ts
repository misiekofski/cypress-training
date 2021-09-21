describe('random user app - intercepted response', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('https://randomuser.me/api', {fixture: 'user.json', delay: 500}).as('randomUserResponse')
  })

  it('Loading … is displayed then image', () => {
    cy.contains('#root', /Loading/)
    cy.get('#root > img').should('have.attr', 'title').should('match', /Paulo da Rosa/)
  })

  it('verifies existing of alt attribute', () => {
    //
  })

  it('verifies existing of title attribute', () => {
    //
  })
})

