'use strict';

const { shuffle } = require('../prototypes/shuffle');

module.exports = {

    distributeRandomly: (studentList, groupSize, shouldShuffle) => {
        
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
    distributeEvenlyByStrengthLevel: (studentList, shouldShuffle) => {

        const strongStudents = studentList["strong"];
        const standardStudents = studentList["standard"];

        const groupSize = Math.floor( standardStudents.length / strongStudents.length );
        let remainder = standardStudents.length % strongStudents.length;

        if (shouldShuffle) {
            strongStudents.shuffle();
            standardStudents.shuffle();
        };

        let finalGroups = strongStudents.map(student => [student]);

        while (standardStudents.length > 0) {

            finalGroups = finalGroups.map(strongStudent => {
                let subGroup;

                if (remainder > 0) {
                    subGroup = standardStudents.splice(0, groupSize + 1);
                    remainder--;
                } else {
                    subGroup = standardStudents.splice(0, groupSize);
                }
        
                return strongStudent.concat(subGroup);
            });
        };
        
        return finalGroups
    }
};

