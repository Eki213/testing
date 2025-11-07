import { analyzeArray } from "../src/analyzeArray.js";

describe("analyzeArray", () => {
  const inputs = [
    [1, 8, 3, 4, 2, 6],
    [2, 3, 1],
    [-1, 2.5, 3.6],
    [2, 3, 5, 0],
    [],
  ];

  test("check average property", () => {
    expect(analyzeArray(inputs[0]).average).toBe(4);
    expect(analyzeArray(inputs[1]).average).toBe(2);
    expect(analyzeArray(inputs[2]).average).toBe(1.7);
    expect(analyzeArray(inputs[3]).average).toBe(2.5);
    expect(analyzeArray(inputs[4]).average).toBeNaN();
  });

  test("check min property", () => {
    expect(analyzeArray(inputs[0]).min).toBe(1);
    expect(analyzeArray(inputs[1]).min).toBe(1);
    expect(analyzeArray(inputs[2]).min).toBe(-1);
    expect(analyzeArray(inputs[3]).min).toBe(0);
    expect(analyzeArray(inputs[4]).min).toBeUndefined();
  });

  test("check max property", () => {
    expect(analyzeArray(inputs[0]).max).toBe(8);
    expect(analyzeArray(inputs[1]).max).toBe(3);
    expect(analyzeArray(inputs[2]).max).toBe(3.6);
    expect(analyzeArray(inputs[3]).max).toBe(5);
    expect(analyzeArray(inputs[4]).max).toBeUndefined();
  });

  test("check length property", () => {
    expect(analyzeArray(inputs[0]).length).toBe(6);
    expect(analyzeArray(inputs[1]).length).toBe(3);
    expect(analyzeArray(inputs[2]).length).toBe(3);
    expect(analyzeArray(inputs[3]).length).toBe(4);
    expect(analyzeArray(inputs[4]).length).toBe(0);
  });
});
