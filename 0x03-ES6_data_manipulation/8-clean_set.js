export default function cleanSet(set, startString) {
  const filter = [...set].filter((value) => value.startsWith(startString));
  const string = filter.map((value) => value.slice(startString.length)).join('-');

  return string;
}
