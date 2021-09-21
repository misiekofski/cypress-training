describe('unhappy path', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('https://randomuser.me/api', {
      statusCode: 500,
    }).as('unhappyPath')
  })

  it('displays information about error if response is not successful', () => {
    // verify that error has been displayed
  })
})
