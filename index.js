const { getStudents } = require('./init/index');
const createGroups = require('./create/groups');

(async () => {

    let studentList = await getStudents('students-roster_example.json');
    console.log(studentList);

    // let finalGroups = await createGroups.byAllStudents(studentList, 3, true);
    // console.log(finalGroups);

    let groupsByStrength = createGroups.byStrength(studentList, true);
    console.log(groupsByStrength);

})();







