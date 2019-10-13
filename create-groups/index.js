'use strict';

const { shuffle } = require('../prototypes/shuffle');

module.exports = {

    byAllStudents: (studentList, groupSize, shouldShuffle) => {
        
        const fullRoster = studentList["strong"].concat(studentList["standard"]);
       
        if (shouldShuffle) {
            fullRoster.shuffle();
        };

        const finalGroups = [];

        while (fullRoster.length > 0) {
            let group = fullRoster.splice(-groupSize);
            finalGroups.push(group);
        } 

        return finalGroups

    },
    byStrength: (studentList, shouldShuffle) => {

        const strongStudents = studentList["strong"];
        const standardStudents = studentList["standard"];

        if (shouldShuffle) {
            strongStudents.shuffle();
            standardStudents.shuffle();
        };

        const finalGroups = strongStudents.map(student => [student]);
        
        let groupNumber = 0;
        while (standardStudents.length > 0) {
            let student = standardStudents.shift(); 
            finalGroups[groupNumber].push(student);
            groupNumber === finalGroups.length - 1 ? groupNumber = 0 : groupNumber++;
        }
        
        return finalGroups
    }
};
