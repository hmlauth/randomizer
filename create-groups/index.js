'use strict';

const { shuffle } = require('../prototypes/shuffle');
const { hasStrengthLevel } = require('../util/filter');

module.exports = {

    byAllStudents: (studentList, groupSize, shouldShuffle) => {
        studentList = Object.keys(studentList);

        if (shouldShuffle) {
            studentList.shuffle();
        };

        const finalGroups = []

        while (studentList.length > 0) {
            let group = studentList.splice(-groupSize);
            finalGroups.push(group);
        } 

        return finalGroups

    },
    byStrength: (studentList, shouldShuffle) => {
        // Filter students by strengthLevel (strong, standard, weak)
        const strongStudents = Object.filter(studentList, "strong", hasStrengthLevel);
        const standardStudents = Object.filter(studentList, "standard", hasStrengthLevel);
        const strongStudentNames = Object.keys(strongStudents);
        const standardStudentNames = Object.keys(standardStudents);

        if (shouldShuffle) {
            strongStudentNames.shuffle();
            standardStudentNames.shuffle();
        };

        const groupedByStrength = [];

        strongStudentNames
        .forEach(student => groupedByStrength.push([student]))
        
        groupedByStrength
        .forEach(group => group.push(standardStudentNames.shift()))
        
        return groupedByStrength
    }
};
