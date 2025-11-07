export function caesarCipher(str, shift) {
  let cipher = "";
  const START_CHAR_CODE = "a".charCodeAt(0);
  const END_CHAR_CODE = "z".charCodeAt(0);
  const NUM_CHARS = END_CHAR_CODE - START_CHAR_CODE + 1;
  const cleanStr = str.toLowerCase();

  for (let i = 0; i < cleanStr.length; i++) {
    let code = cleanStr.charCodeAt(i);
    let char = str[i];

    if (!isCharacter(char)) {
      cipher += char;
      continue;
    }

    let charIndex = code + shift - START_CHAR_CODE;
    charIndex = charIndex % NUM_CHARS;
    charIndex += charIndex >= 0 ? START_CHAR_CODE : START_CHAR_CODE + NUM_CHARS;

    let cipherChar = String.fromCharCode(charIndex);
    if (isUppercase(char)) cipherChar = cipherChar.toUpperCase();
    cipher += cipherChar;
  }

  return cipher;
}

function isUppercase(str) {
  return str === str.toUpperCase();
}

function isCharacter(char) {
  return char.toUpperCase() !== char.toLowerCase();
}
