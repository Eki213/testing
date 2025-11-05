export function capitalize(str) {
  const cleanWord = str.trim();
  const firstLetter = cleanWord.at(0);
  if (!firstLetter) return "";
  return `${firstLetter.toUpperCase()}${cleanWord.slice(1)}`;
}
