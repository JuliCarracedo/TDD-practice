const Calculator = require('./calculator');

const calc = new Calculator();

describe('add function',() => {
    it('sums 1+2 to equal 3',() => {
        expect(calc.add(1,2)).toBe(3);
    })
    it('sums 1+2+3 to equal 6',() => {
        expect(calc.add(1,2,3)).toBe(6);
    })
    it('sums 5+1+2+3 to equal 11',() => {
        expect(calc.add(5,1,2,3)).toBe(11);
    })
})

describe('subtract function',() => {
    it('subtracts 2-1 to equal 1',() => {
        expect(calc.subtract(2,1)).toBe(1);
    })
    it('subtracts 3-1-1 to equal 1',() => {
        expect(calc.subtract(3,1,1)).toBe(1);
    })
    it('subtracts 5-1-3 to equal 1',() => {
        expect(calc.subtract(5,1,3)).toBe(1);
    })
})

describe('multiply function',() => {
    it('multiplies 1*2 to equal 2',() => {
        expect(calc.multiply(1,2)).toBe(2);
    })
    it('multiplies 1*2*3 to equal 6',() => {
        expect(calc.multiply(1,2,3)).toBe(6);
    })
    it('multiplies 5*1*2*3 to equal 30',() => {
        expect(calc.multiply(5,1,2,3)).toBe(30);
    })
})

describe('divide function',() => {
    it('divides 1/1 to equal 1',() => {
        expect(calc.divide(1,1)).toBe(1);
    })
    it('divides (6/3)/2 to equal 1',() => {
        expect(calc.divide(6,3,2)).toBe(1);
    })
    it('divides 25/5 to equal 5',() => {
        expect(calc.divide(25,5)).toBe(5);
    })
})
