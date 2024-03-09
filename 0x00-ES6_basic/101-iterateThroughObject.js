export default function iterateThroughObject(reportWithIterator) {
  const b = [];
  for (const e of reportWithIterator) {
    b.push(e);
  }
  return b.join(' | ');
}
