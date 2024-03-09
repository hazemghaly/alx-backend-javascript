export default function appendToEachArrayValue(array, appendString) {
  const narray = [];
  for (let idx = 0; idx < array.length;) {
    idx += 1;
    const value = array[idx];
    narray.push(appendString + value);
  }
  return narray;
}
