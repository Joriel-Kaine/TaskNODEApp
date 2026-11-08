import { describe, it, expect } from 'vitest'
import { fibonacci } from '../src/functions.js'

describe('función de fibonacci', () => {
    it('fibonacci', () => {
        expect(() => fibonacci(-2)).toThrow(RangeError)
        expect(fibonacci(0)).toBe(0)
        expect(fibonacci(1)).toBe(1)
        expect(fibonacci(8)).toBe(21)
    })
})