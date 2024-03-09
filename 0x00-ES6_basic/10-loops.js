export default function appendToEachArrayValue(array, appendString) {
  const narray = [];
  for (const idx of array) {
    if (array.length >= 0) {
      const value = array[idx];
      narray.push(appendString + value);
    }
  }
  return narray;
}
