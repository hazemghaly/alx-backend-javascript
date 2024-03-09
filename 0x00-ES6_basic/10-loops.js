export default function appendToEachArrayValue(array, appendString) {
  const narray = [];
  for (const idx in array) {
    const value = array[idx];
    narray.push(appendString + value);
  }
  return narray;
}
