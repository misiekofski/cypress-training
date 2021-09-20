/// <reference types="Cypress" />

context('Simple demo test', () => {
    // beforeEach(() => {
    //     cy.visit('/does-not-exist')
    // })

    it('Hello', () => {
        expect(true).to.equal(true)
    })

    it('Hello World', () => {
        expect(true).to.be.true
    })

    xit('Hello Cypress World', () => {
        expect(false).to.equal(true)
    })

    it('')

    xit('txt', () => {
        cy.pause()
    })

    xit('check', () => {
        cy.get('.selector-in-question').debug()
    })

    it('Viewport', () => {
        cy.viewport('iphone-6')
        expect(true).to.equal(true)
        cy.log('iphone-6')
    })

    it('Cypress')

    xit('True != False', () => {
        expect(true).to.equal(false)
    })

    it('Hello', {
        retries: 1
    }, () => {
        expect(false).is.equal(true)
    })

    xit('Check Add', () => {
        expect(Cypress._.add(0, 1)).to.equal(1)
    })


    it.skip('Check Mult', () => {
        expect(Cypress._.multiply(0, 1)).to.equal(0)
    })

    // it('Check Div', () => {
    //     expect(Cypress._.divide(0, 1)).to.equal(1)
    // })

    // npx cypress run --spec "cypress/integration/demo.spec.js"
})