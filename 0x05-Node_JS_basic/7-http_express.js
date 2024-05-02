const express = require('express');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;
const app = express();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      reject(err); // Propagate the error
      return;
    }
    try {
      const reportParts = [];
      const fileLines = data.trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }
      const totalStudents = Object.values(studentGroups).reduce(
        (pre, cur) => (pre || []).length + cur.length,
      );
      reportParts.push(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        reportParts.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(reportParts.join('\n'));
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
});
app.get('/', (_, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  try {
    const report = await countStudents(DB_FILE);
    res.status(200).send(`This is the list of our students\n ${report}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
