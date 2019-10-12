const init = require('@hmlauth/randomizer');

(async () => {

    const studentList = await init('students.json');
    let groupsByAll = createGroups.byAllStudents(studentList, 3, true);
    let groupsByStrength = createGroups.byStrength(studentList, true);

})();