/// <reference types="cypress" />

const { add, mult } = require('../../../../../src/calc')

describe('Unit tests', () => {
    it('Addition tests', () => {
        expect(add(0, 1)).to.equal(1)
    })

    it('Multiplication tests', () => {
        expect(mult(0, 1)).to.equal(0)
    })
})
