import { sum } from './sum';

describe('Tinkamai suskaiciuoti rezultatai', () => {
    test('1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
    test('11 + 2 = 13', () => {
        expect(sum(11, 2)).toBe(13);
    })
    test('-1 + 12 = 11', () => {
        expect(sum(-1, 12)).toBe(11);
    })
    test('-1 + -12 = -13', () => {
        expect(sum(-1, -12)).toBe(-13);
    })
})