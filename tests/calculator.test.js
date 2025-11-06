import { Calculator } from "../src/calculator.js";

describe("Calculator", () => {
  const calculator = Calculator();

  test("add numbers", () => {
    expect(calculator.add(1, 3)).toBe(4);
    expect(calculator.add(-2, 1)).toBe(-1);
    expect(calculator.add(0, 3)).toBe(3);
  });

  test("subtract numbers", () => {
    expect(calculator.subtract(3, 2)).toBe(1);
    expect(calculator.subtract(1, 5)).toBe(-4);
    expect(calculator.subtract(1, 1)).toBe(0);
  });

  test("divide numbers", () => {
    expect(calculator.divide(3, 3)).toBe(1);
    expect(calculator.divide(8, 4)).toBe(2);
    expect(calculator.divide(1, 3)).toBeCloseTo(0.33);
    expect(calculator.divide(4, 0)).toBeNull();
  });

  test("multiply numbers", () => {
    expect(calculator.multiply(4, 6)).toBe(24);
    expect(calculator.multiply(12, 6)).toBe(72);
    expect(calculator.multiply(3.2, 12)).toBeCloseTo(38.4);
  });
});
