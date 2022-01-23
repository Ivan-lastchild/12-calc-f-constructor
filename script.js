function Calculator(base) {
    this.base = base;

    this.add = function(num){
        validNum(num) ? base += num : base;
    };
    this.sub = function(num){
        validNum(num) ? base -= num : base;
    };
    this.mult = function(num){
        validNum(num) ? base *= num : base;
    };
    this.div = function(num){
        validNum(num) ? base /= num : base;
    };
    this.set = function(num){
        validNum(num) ? base = num : base;
    };
    this.get = function(){
        return base;
    }; 
}

function validNum (num){
    return typeof num === "number";
}

const calc = new Calculator(100);

calc.add(10); 
calc.add(10); 
calc.sub(20); 
calc.set(20); 
calc.add(10); 
calc.add('qwe');
calc.get();
