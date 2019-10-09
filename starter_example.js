const {init, createGroups} = require('./index');

const allStudents = init.allStudents('students_roster.txt');
createGroups(4, true, allStudents);

const studentsByStrength = init.byStrength('students_strengths.txt');
createGroups(null, true, studentsByStrength);
