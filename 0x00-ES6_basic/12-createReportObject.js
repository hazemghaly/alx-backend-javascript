export default function createReportObject(employeesList) {
  const allEmployees = {};
  for (const departmentName in employeesList) {
    if (employeesList.hasOwnProperty(departmentName)) {
      allEmployees[departmentName] = Array.isArray(employeesList[departmentName]) ? employeesList[departmentName] : [];
    }
  }
  const H = {
    allEmployees: {},
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  H.numberOfDepartments = H.getNumberOfDepartments();
  return H;
}
