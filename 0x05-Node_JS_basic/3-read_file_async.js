const fs = require('fs').promises;

const countStudents = async (file) => {
  try {
    const fileContent = await fs.readFile(file, 'utf-8');
    const fileLines = fileContent.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
    let numberOfStudents = 0;
    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];
      if (!Object.keys(studentGroups).includes(field)) {
        studentGroups[field] = [];
      }
      numberOfStudents += 1;
      const studentEntries = studentPropNames
        .map((propName, idx) => [propName, studentPropValues[idx]]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }
    console.log(`Number of students in ${numberOfStudents}`);
    // const totalStudents = Object
    //   .values(studentGroups)
    //   .reduce((pre, cur) => (pre || []).length + cur.length, 0);
    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// Export your function
module.exports = countStudents;
