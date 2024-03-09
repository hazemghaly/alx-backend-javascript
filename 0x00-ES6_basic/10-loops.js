export default function appendToEachArrayValue(array, appendString) {
  const narray = [];
  for (const value of array) {
    if (array.length >= 0) {
      narray.push(appendString + value);
    }
  }
  return narray;
}
