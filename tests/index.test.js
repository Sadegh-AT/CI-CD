const should = require("should");
const Calculator = require("../index");

describe("Calculator", function () {
  let calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  it("should add two numbers correctly", function () {
    calculator.sum(2, 3).should.equal(5);
  });

  it("should subtract two numbers correctly", function () {
    calculator.subtract(5, 3).should.equal(2);
  });

  it("should multiply two numbers correctly", function () {
    calculator.multiply(2, 3).should.equal(6);
  });

  it("should divide two numbers correctly", function () {
    calculator.divide(6, 3).should.equal(2);
  });

  it("should throw an error when dividing by zero", function () {
    (function () {
      calculator.divide(6, 0);
    }).should.throw("Division by zero is not allowed");
  });

  it("should calculate power of a number correctly", function () {
    calculator.power(2, 3).should.equal(8);
  });

  it("should calculate square root of a number correctly", function () {
    calculator.sqrt(9).should.equal(3);
  });

  it("should throw an error when calculating square root of a negative number", function () {
    (function () {
      calculator.sqrt(-1);
    }).should.throw("Square root of negative number is not allowed");
  });
});
