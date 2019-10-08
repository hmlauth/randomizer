// Define functions to handle read files
function createArray(studentsRoser) {
    return students.split('\n');
};

function createReferences(studentsByStrength) {
    
    let students = studentsByStrength.split('\n').slice(1);
    let yetStrongIndex = students.indexOf('YETSTRONG');
    let yetStrongStudents = students.slice(yetStrongIndex + 1);
    let strong = students.slice(0, yetStrongIndex);
    let strongStudents = {};
    strong.forEach(cv => strongStudents[cv] = [])
   
    return {strongStudents, yetStrongStudents}

};

module.exports = {
    createArray, 
    createReferences
};