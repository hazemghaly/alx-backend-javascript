export default function createEmployeesObject(departmentName, employees) {
  const HA = {
    [departmentName]:
    employees,
  };
  return HA;
}
