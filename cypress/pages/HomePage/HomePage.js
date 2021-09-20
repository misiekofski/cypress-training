var elements = require('./elements');

class HomePage {
  clickSomeButton() {
    return cy.get(elements.HOMEPAGE.SOME_BUTTON).click();
  }

}

export default HomePage;