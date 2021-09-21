describe('random user app - intercepted response', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('https://randomuser.me/api', {fixture: 'user.json', delay: 500}).as('randomUserResponse')
  })

  it('Loading … is displayed then image', () => {
    cy.contains('#root', /Loading/)
    cy.wait('@randomUserResponse')
    cy.get('#root > img').should('have.attr', 'title').should('match', /Paulo da Rosa/)
  })

  it('verifies existing of alt attribute', () => {
    cy.get('#root > img').should('have.attr', 'alt', 'random user')
  })

  it('verifies existing of alt attribute with expectetion', () => {
    return cy.get('#root > img').then(r => {
      const alt = r.attr('alt')
      expect(alt).to.equal('random user')
    })
  })

  it('verifies existing of title attribute', () => {
    cy.get('#root > img').should('have.attr', 'title').should('match', /Paulo da Rosa/)
  })

  it('verifies existing of title attribute with expectation', () => {
    cy.get('#root > img').should($element => {
      expect($element.attr('title')).to.match(/Paulo da Rosa/)
    })
  })
})

