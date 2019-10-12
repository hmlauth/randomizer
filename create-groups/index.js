'use strict';

const { shuffle } = require('../prototypes/shuffle');

module.exports = {

    byAllStudents: (studentList, groupSize, shouldShuffle) => {
        
        const fullRoster = studentList["strong"].concat(studentList["standard"]);
       
       
        if (shouldShuffle) {
            fullRoster.shuffle();
        };

        const finalGroups = []

        while (fullRoster.length > 0) {
            let group = fullRoster.splice(-groupSize);
            finalGroups.push(group);
        } 

        return finalGroups

    },
    byStrength: (studentList, shouldShuffle) => {
        // Filter students by strengthLevel (strong, standard, weak)
        const strongStudents = studentList["strong"];
        const standardStudents = studentList["standard"];

        if (shouldShuffle) {
            strongStudents.shuffle();
            standardStudents.shuffle();
        };

        const groupedByStrength = [];

        strongStudents
        .forEach(student => groupedByStrength.push([student]));
        
        let groupNumber = 0;
        while (standardStudents.length > 0) {
            let student = standardStudents.shift(); 
            groupedByStrength[groupNumber].push(student);
            groupNumber === groupedByStrength.length - 1 ? groupNumber = 0 : groupNumber++;
        }
        
        
        return groupedByStrength
    }
};
