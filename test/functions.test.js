import { describe, it, expect } from 'vitest'
import { fibonacci, isValidPin } from '../src/functions.js'

describe('función de Fibonacci', () => {
    it('Fibonacci', () => {
        expect(() => fibonacci(-2)).toThrow(RangeError)
        expect(fibonacci(0)).toBe(0)
        expect(fibonacci(1)).toBe(1)
        expect(fibonacci(8)).toBe(21)
    })
})

describe('validación del PIN'), () => {
    it('validarPIN', () => {
        expect(isValidPin(null)).toBe(false);
        expect(isValidPin(undefined)).toBe(false);
        expect(isValidPin('')).toBe(false);
        expect(isValidPin('1234')).toBe(true);
        expect(isValidPin('123456')).toBe(true);
        expect(isValidPin('12m4')).toBe(false);
        expect(isValidPin('0000')).toBe(false);
        expect(isValidPin('12345')).toBe(false);
    })
}