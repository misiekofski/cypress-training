/// <reference types="cypress" />

import { add, mult } from '../../../../src/calc'

describe('Unit tests', () => {
    it('Addition tests: 0 + 1', () => {
        expect(add(0, 1)).to.equal(1)
    })

    it('Addition tests: 1 + 0', () => {
        expect(add(1, 0)).to.equal(1)
    })

    it('Multiplication tests: 0 * 1', () => {
        expect(mult(0, 1)).to.equal(0)
    })
})
