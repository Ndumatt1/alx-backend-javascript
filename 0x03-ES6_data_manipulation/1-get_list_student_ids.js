export default function getListStudentsIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const newArray = array.map((arr) => arr.id);

  return newArray;
}
