export default function iterateThroughObject(reportWithIterator) {
  const object = [];
  for (const value of reportWithIterator) {
    object.push(value);
  }
  return object.join(' | ');
}
