/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  isNumeric(char) {
    return !isNaN(parseFloat(char)) && isFinite(char);
  }
  /*
for parentheses create a variable to check if parentheses is open or close
if parentheses is open then start creating a string if parentheses is closed and it has length then call calculate again
*/
  calculate(expression) {
    let currentNumber = 0;
    let currentOperator = "+";
    let isCreatingEquation = false;
    let parenthesesEquation = "";

    for (const char of expression) {
      if (char !== " ") {
        if (this.isNumeric(char)) {
          currentNumber = currentNumber * 10 + parseFloat(char);
        } else {
          if (char === "(") {
            isCreatingEquation = true;
          }
          if (isCreatingEquation) {
            parenthesesEquation += char;
            if (char === ")" && parenthesesEquation.length !== 0) {
              const parenthesesResult = this.calculate(parenthesesEquation);
              isCreatingEquation = false;
              this.performOperation(currentOperator, parenthesesResult);
            } else {
              throw new Error();
            }
          } else {
            this.performOperation(currentOperator, currentNumber);
            currentOperator = char;
            currentNumber = 0;
          }
        }
      }
    }

    // Perform the last operation after the loop completes
    this.performOperation(currentOperator, currentNumber);

    return this.getResult();
  }

  performOperation(operator, number) {
    switch (operator) {
      case "+":
        this.add(number);
        break;
      case "-":
        this.subtract(number);
        break;
      case "*":
        this.multiply(number);
        break;
      case "/":
        this.divide(number);
        break;
      default:
        throw new Error("Invalid operator");
    }
  }
}

module.exports = Calculator;
