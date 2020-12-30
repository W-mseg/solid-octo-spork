describe('Return a typeOf of the argument', () => {
    it('should return a typeOf of the argument', () => {
        expect(typeof useTypeOf('')).toBe(typeof '');
    });
});
describe('Return a string', () => {
    it('should return a string', () => {
        expect(typeof returnAString()).toBe(typeof '')
    });
});
describe('Return a boolean', () => {
    it('should return true or false', () => {
        expect(typeof returnABoolean()).toBe(typeof true)
    })
});
describe('Return a Number', () => {
    it('should return a number', () => {
        expect(typeof returnANumber()).toBe(typeof 42)
    })
});
describe('Return a BigInt', () => {
    it('should return a BigInt', () => {
        expect(typeof returnABigInt()).toBe(typeof 43n)
    })
});
describe('Return undefined', () => {
    it('should return undefined', () => {
        expect(returnUndefined()).toBe(undefined)
    })
});
describe('Return a symbol', () => {
    it('should return a symbol', () => {
        expect(typeof returnASymbol()).toBe(typeof Symbol('lol'))
    })
});
describe('Return Null', () => {
    it('should return null', () => {
        expect(returnNull()).toEqual(null)
    })
});
describe('Return an object', () => {
    it('should return an object', () => {
        expect(typeof returnAnObject()).toBe(typeof {})
    })
})