async function createArray(students) {
    try {

       return students.split('\n');
        
    } catch (err) {
        console.log(err)
    }
};

async function createReferences(studentsByStrength) {
    try {

        let students = studentsByStrength.split('\n').slice(1);
        let yetStrongIndex = students.indexOf('YETSTRONG');
        let yetStrongStudents = students.slice(yetStrongIndex + 1);
        let strongList = students.slice(0, yetStrongIndex);
        let strongStudents = {};
        strongList.forEach(cv => strongStudents[cv] = []);
       
        return {strongStudents, yetStrongStudents}

    } catch (err) {
        console.log(err)
    }

};

module.exports = {
    createArray, 
    createReferences
};