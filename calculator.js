class Calculator {
    add(...args){
        return args.reduce((acc, val) => acc+val);
    }
    subtract(base,...args){
        return args.reduce(((acc, val) => acc-val), base);
    }
    multiply(...args){
        return args.reduce((acc, val) => acc*val);
    }
    divide(base,...args){
        return args.reduce(((acc, val) => acc/val), base);
    }
}

module.exports = Calculator;