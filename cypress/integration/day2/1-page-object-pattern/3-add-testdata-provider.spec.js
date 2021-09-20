/// <reference types="cypress" />
import { LoginPage } from "../../../pages/LoginPage/LoginPage";
const loginPage = new LoginPage();
// Task #3

describe('multiple users test', () => {
  // We cannot load JSON file using "cy.fixture"
  // because it means the test is already running.
  // Same with using "before" hook - new tests cannot be created from "before" hook.
  // Instead we need to load JSON file using "require" at the start time  
  const users = require('../../../fixtures/userlogins');

  users.forEach((user) => {
      it(`logs user: ${user.email}`, () => {
        loginPage.navigateTo();
        loginPage.loginWithCredentials(user.email, user.password);
      })
  })
})