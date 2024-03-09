export default function createReportObject(employeesList) {
  const allEmployees = {};
  const departmentNames = Object.keys(employeesList);
  departmentNames.forEach((departmentName) => {
    const department = employeesList[departmentName];
    if (!Array.isArray(allEmployees[departmentName])) {
      allEmployees[departmentName] = [];
    }
    allEmployees[departmentName].push(department.name);
  });
  const H = {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  H.numberOfDepartments = H.getNumberOfDepartments();
  return H;
}
