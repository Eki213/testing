import { capitalize } from "../src/capitalize.js";

test("returns capitalized word", () => {
  expect(capitalize("bee")).toBe("Bee");
  expect(capitalize("dog")).toBe("Dog");
  expect(capitalize("cat")).toBe("Cat");
  expect(capitalize("person")).toBe("Person");
  expect(capitalize("")).toBe("");
  expect(capitalize("    cat")).toBe("Cat");
});
