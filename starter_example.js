const {init, createGroups} = require('./index');

const allStudents = init.allStudents('students_roster_example.txt');
createGroups(4, true, allStudents);

const studentsByStrength = init.byStrength('students_strengths_example.txt');
createGroups(null, true, studentsByStrength);
