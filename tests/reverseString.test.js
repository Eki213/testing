import { reverseString } from "../src/reverseString.js";

test("returns reversed string", () => {
  expect(reverseString("word")).toBe("drow");
  expect(reverseString("women")).toBe("nemow");
  expect(reverseString("baby")).toBe("ybab");
  expect(reverseString("123")).toBe("321");
});
