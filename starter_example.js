const { getStudents, createGroups} = require('@hmlauth/randomizer');

(async () => {

    const allStudents = await getStudents('students_roster_example.txt');
    const byStrength = await getStudents('students_strengths_example.txt');

    createGroups(3, true, allStudents);
    createGroups(null, true, byStrength);

})();