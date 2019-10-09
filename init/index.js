const fs = require('fs');
const { createArray, createReferences } = require('../create/references');

function allStudents(filename) {
    const studentList = fs.readFileSync(filename, 'utf8');
    const allStudents = createArray(studentList);
    return { allStudents }

};

function byStrength(filename) {
    const studentStrengthList = fs.readFileSync(filename, 'utf8'); 
    const { strongStudents, yetStrongStudents } = createReferences(studentStrengthList);
    return { strongStudents, yetStrongStudents }
};

module.exports = { allStudents, byStrength };