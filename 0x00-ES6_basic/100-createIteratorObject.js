export default function createIteratorObject(report) {
  const e = [];
  const departments = Object.values(report.allEmployees);
  for (const department of departments) {
    for (const employee of department) {
      e.push(employee);
    }
  }
  return e;
}
