import { caesarCipher } from "../src/caesarCipher.js";

test("returns ciphertext", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
  expect(caesarCipher("def", 3)).toBe("ghi");
  expect(caesarCipher("julius", 3)).toBe("mxolxv");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("XyZ", 3)).toBe("AbC");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("abc", -3)).toBe("xyz");
  expect(caesarCipher("abc", 4)).toBe("efg");
});
