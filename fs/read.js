const fs = require('fs');

// Read from files
let studentRoster = fs.readFileSync('students_roster.txt', 'utf8')
let studentsByStrength = fs.readFileSync('students_strengths.txt', 'utf8'); 

// Define functions to handle read files
function putStudentsInArray(students) {
    return students.split('\n');
};

function organizeStudentsByStrength(studentsByStrength) {
    
    let students = studentsByStrength.split('\n').slice(1);
    let yetStrongIndex = students.indexOf('YETSTRONG');
    let yetStrongStudents = students.slice(yetStrongIndex + 1);
    let strong = students.slice(0, yetStrongIndex);
    let strongStudents = {};
    strong.forEach(cv => strongStudents[cv] = [])
   
    return {strongStudents, yetStrongStudents}

};

// Call functions
let allStudents = putStudentsInArray(studentRoster);
let {strongStudents, yetStrongStudents} = organizeStudentsByStrength(studentsByStrength);

// Export functions
module.exports = {
    allStudents,
    strongStudents,
    yetStrongStudents
}



