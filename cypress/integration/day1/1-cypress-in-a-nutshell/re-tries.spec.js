/// <reference types="cypress" />

// Task #4

describe('Multiple assertions', {
    "retries": {
        "runMode": 0,
        "openMode": 1
    }
}, () => {
    beforeEach(() => {
        // cy.visit('/')
    })

    it(`This is OK`, () => {
        cy.visit('https://example.cypress.io/todo')
        expect(true).to.equal(true)
    })

    it(`This should re-try few times and fail`, () => {
        assert.isTrue(true, 'this val is true')
        cy.visit('/')
    })
})
