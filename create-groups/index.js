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
        // console.log(strongStudents);
        // console.log(standardStudents);
        const groupSize = Math.floor( standardStudents.length / strongStudents.length );
        let remainder = standardStudents.length % strongStudents.length;
        console.log(`${groupSize}, ${remainder}`);

        if (shouldShuffle) {
            strongStudents.shuffle();
            standardStudents.shuffle();
        };


        let finalGroups = strongStudents.map(student => [student]);

        while (standardStudents.length > 0) {
            finalGroups = finalGroups.map(group => {
                let subGroup;

                if (remainder > 0) {
                    subGroup = standardStudents.splice(0, groupSize + 1);
                    remainder--;
                } else {
                    subGroup = standardStudents.splice(0, groupSize);
                }
        
                return group.concat(subGroup);
            });
        };
        
        return finalGroups
    }
};



// standardStudents.length !== remainder ? 
//                 finalGroups[groupNumber].push(standardStudents.splice(-groupSize)[0]) &&
//                 groupNumber++ 
//                 :
//                 groupNumber = 0 &&
//                 finalGroups[groupNumber].push(standardStudents.splice(-1)[0]);    