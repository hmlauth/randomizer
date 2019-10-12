const { shuffle } = require('../prototypes/shuffle');
const { Object, hasStrengthLevel } = require('../utils/filter');
/*

TODO: Add shuffle check based on passed in boolean value

*/

module.exports = {
    byAllStudents: (studentList, groupSize, shouldShuffle) => {
        studentList = Object.keys(studentList);

        if(shouldShuffle) {
            studentList.shuffle();
        };

        let finalGroups = {};
        let groupNumber = 1;

        do {
            let group = studentList.splice(-groupSize);
            finalGroups[`${groupNumber}`] = group;
            groupNumber++
        } while (studentList.length > 0);

        return finalGroups

    },
    byStrength: (studentList, shouldShuffle) => {
        // Filter students by strengthLevel (strong, standard, weak)
        let strongStudents = Object.filter(studentList, "strong", hasStrengthLevel);
        let standardStudents = Object.filter(studentList, "standard", hasStrengthLevel);
        let strongStudentNames = Object.keys(strongStudents);
        let standardStudentNames = Object.keys(standardStudents);
       
        if (shouldShuffle) {
            strongStudentNames.shuffle();
            standardStudentNames.shuffle();
        };

        let groupsByStrength = {};
        let groupNumber = 1

        strongStudentNames.forEach(student => {
            groupsByStrength[groupNumber] = [student];
            groupNumber < strongStudentNames.length ? groupNumber++ : groupNumber = 1;
        });

        do {
            
            let [student] = standardStudentNames.splice(-1);
            groupsByStrength[groupNumber].push(student);
            groupNumber === 5 ? groupNumber = 1: groupNumber++;

        } while (standardStudentNames.length > 0);
        
        return groupsByStrength
    }
}
