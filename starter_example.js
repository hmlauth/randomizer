const init = require('@hmlauth/randomizer');

(async () => {

    const studentList = await init('students.json');
    let groupedByAll = createGroups.byAllStudents(studentList, 3, true);
    let groupedByStrength = createGroups.byStrength(studentList, true);

})();