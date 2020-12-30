describe('Operator plus', () => {
    it('should return 44', () => {
        const argument1 = 12;
        const argument2 = 32;

        const result = operatorPlus(44);

        expect(result).toBe(argument1 + argument2);
    });
    it('should return 89', () => {
        const argument1 = 45;
        const argument2 = 39;

        const result = operatorPlus(argument1,argument2);

        expect(result).toBe(89);
    });
    it('should return -5', () => {
        const argument1 = -12;
        const argument2 = 7;

        const result = operatorPlus(argument1,argument2);

        expect(result).toBe(-5);
    })
});
describe('Operator minus', () => {
    it('should return the result of number2 minus number1', () => {
        const argument1 = 100;
        const argument2 = 68;

        const result = operatorMinus(argument1,argument2);

        expect(result).toBe(argument2 - argument1);
    })
});
describe('Operator divide', () => {
    it('should return the result of number1 divide by number2', () => {
        const argument1 = 27;
        const argument2 = 3;

        const result = operatorDivide(argument1,argument2);

        expect(result).toBe(argument1 / argument2);
    })
});
describe('Operator multiply', () => {
    it('should return the result of number1 multiply by number2', () => {
        const argument1 = 12;
        const argument2 = 78;

        const result = operatorMultiply(argument1,argument2);

        expect(result).toBe(argument1 * argument2);
    })
});
describe('Increment the argument', () => {
    it('should return the value of the argument incremented by 1', () => {
        const number = 12;

        const result = incrementArgument(number);

        expect(result).toBe(number + 1);
    })
});
describe('Decrement the argument', () => {
    it('should return the value of the argument decremented by 1', () => {
        const number = 12;

        const result = decrementArgument(number);

        expect(result).toBe(number - 1);
    })
});
describe('Exponentiate the argument', () => {
    it('should return the value of number1 exponentiated by number2', () => {
        const number1 = 12;
        const number2 = 4;

        const result = exponentiateArgument(number1,number2);

        expect(result).toBe(number1**number2);
    })
});
describe('Modulo the first value with the second', () => {
    it('should return the value of number1 modulo by number2', () => {
        const number1 = 189;
        const number2 = 3;

        const result = moduloArgument(number1,number2);

        expect(result).toBe(number1%number2);
    });
});
describe('Infinity with boolean', () => {
    it('should return infinity with a boolean false', () => {
        expect(infinityBoolean(42,false)).toBePositiveInfinity();
    });
    it('should not return infinity with a boolean true', () => {
        expect(infinityBoolean(42,true)).toBe(42);
    });
});