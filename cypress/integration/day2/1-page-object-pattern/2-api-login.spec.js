/// <reference types="cypress" />

// Task #2

context('API Login test into page object pattern', () => {
    let accessToken = '';

    beforeEach(() => {
      cy.request({
          method: 'POST',
          url: 'https://portal-api.vizlib.com/api/auth/login',
          body: {
              "username": "dobrzycki@gmail.com",
              "password": "test12345"
          }
      }).then(response => {
        accessToken = response.body.access_token;
      })
    })
  
    
    it('pulls user profile via API', () => {
        cy.request({
            method: 'GET',
            url: 'https://portal-api.vizlib.com/api/user/profile-page',
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }).then(response => {
            expect(response.body.phone).to.equal('+48-535105995');
            window.localStorage.setItem('jwt', accessToken);
        })



        cy.visit('https://portal.vizlib.com/pages/home');
    })
})