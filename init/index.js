const fs = require('fs');
const { createArray, createReferences } = require('../create/references');

module.exports = function init(filename1, filename2) {
    
    // Read from files
    const studentList = fs.readFileSync(filename1, 'utf8')
    const studentStrengthList = fs.readFileSync(filename2, 'utf8'); 
    
    // Call functions
    const allStudents = createArray(studentList);
    const {strongStudents, yetStrongStudents} = createReferences(studentStrengthList);
    
    // Return references
    return {
        allStudents,
        strongStudents,
        yetStrongStudents
    }

}
