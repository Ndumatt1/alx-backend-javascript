export default function getStudentByLocation(array, city) {
  const newArray = array.filter((arr) => arr.location === city);
  return newArray;
}
