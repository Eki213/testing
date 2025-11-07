export function analyzeArray(arr) {
  if (arr.length === 0)
    return { average: NaN, min: undefined, max: undefined, length: 0 };

  const average = arr.reduce((acum, num) => acum + num) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average, min, max, length };
}
