class Calculator {
  sum(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
  power(a, b) {
    return Math.pow(a, b);
  }

  sqrt(a) {
    if (a < 0) {
      throw new Error("Square root of negative number is not allowed");
    }
    return Math.sqrt(a);
  }
  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
}

module.exports = Calculator;
