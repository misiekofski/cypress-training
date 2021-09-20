export class LoginPage {

    navigateTo() {
        cy.visit('https://portal.vizlib.com/auth/login');
        return this;
    }
    
    loginWithCredentials(email, password) {
        cy.get('input[formcontrolname="email"]').type(email);
        cy.get('.mat-button-wrapper').click();
        cy.get('input[formcontrolname="password"]').type(password);
        cy.get('.mat-button-wrapper').click();
        return this;
    }

    validateUsername(username) {
        cy.get('span.username').should('have.text', username);
    }
}