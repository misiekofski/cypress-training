/// <reference types="cypress" />
import { LoginPage } from "../../cypress/pages/LoginPage/LoginPage";

// Task #1
const loginPage = new LoginPage();

context('Procedural test into Page Object Pattern', () => {
    beforeEach(() => {
      loginPage.navigateTo();
    })
  
    
    it('procedural tests to rewrite it to Page Object Pattern', () => {
        loginPage
          .loginWithCredentials("dobrzycki@gmail.com", "test12345")
          .validateUsername("Michal Dobrzycki");
    })
})
