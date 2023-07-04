export default function getStudentIdsSum(array) {
  const sum = array.map((id) => id.id)
    .reduce((id1, id2) => id1 + id2);
  return sum;
}
