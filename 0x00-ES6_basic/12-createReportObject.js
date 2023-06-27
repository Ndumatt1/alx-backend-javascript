export default function createReportObject(employeeList) {
  const obj = {
    allEmployees: employeeList,
    getNumberOfDepartments(employeeList) {
      return Object.keys(employeeList).length;
    },
  };
  return obj;
}
