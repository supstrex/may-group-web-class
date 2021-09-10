class Calculator{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    sum(){
        return this.num1 + this.num2;
    }
    subtraction(){
        return this.num1 - this.num2;
    }
    multiplication(){
        return this.num1 * this.num2;
    }
    division(){
        return this.num1 / this.num2;
    }
}
let cal = new Calculator(5, 10);
console.log(cal.sum());