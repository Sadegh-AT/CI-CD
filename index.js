class Calculator {
  sum(a, b) {
    return a + b;
  }
  average(a) {
    if (Array.isArray(a)) {
      const sum = a.reduce((acc, val) => acc + val, 0);
      return sum / a.length;
    } else {
      throw new Error("Input is not an array");
    }
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
