import { atimtis } from './atimtis';

describe('Tinkamai suskaiciuoti rezultatai', () => {
    test('1 - 2 = -1', () => {
        expect(atimtis(1, 2)).toBe(-1);
    })
    test('11 - 2 = 9', () => {
        expect(atimtis(11, 2)).toBe(9);
    })
    test('-1 - 12 = -13', () => {
        expect(atimtis(-1, 12)).toBe(-13);
    })
    test('-1 - -12 = 11', () => {
        expect(atimtis(-1, -12)).toBe(11);
    })
})

describe('Priciumpamas pirmas nevalidus parametras', () => {
    test('pagaunamas tekstas', () => {
        expect(atimtis('asd', 2)).toBeFalsy();
        expect(atimtis('', 2)).toBeFalsy();
        expect(atimtis('5', 2)).toBeFalsy();
    })
    test('pagaunamas boolean', () => {
        expect(atimtis(true, 2)).toBeFalsy();
        expect(atimtis(false, 2)).toBeFalsy();
    })
    test('pagaunamas ne normalus skaicius', () => {
        expect(atimtis(NaN, 2)).toBeFalsy();
        expect(atimtis(Infinity, 2)).toBeFalsy();
        expect(atimtis(-Infinity, 2)).toBeFalsy();
    })
})

describe('Priciumpamas antras nevalidus parametras', () => {
    test('pagaunamas tekstas', () => {
        expect(atimtis(2, 'asd')).toBeFalsy();
        expect(atimtis(2, '')).toBeFalsy();
        expect(atimtis(2, '5')).toBeFalsy();
    })
    test('pagaunamas boolean', () => {
        expect(atimtis(2, true)).toBeFalsy();
        expect(atimtis(2, false)).toBeFalsy();
    })
    test('pagaunamas ne normalus skaicius', () => {
        expect(atimtis(2, NaN)).toBeFalsy();
        expect(atimtis(2, Infinity)).toBeFalsy();
        expect(atimtis(2, -Infinity)).toBeFalsy();
    })
})