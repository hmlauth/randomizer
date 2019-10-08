const { shuffle } = require('../prototypes/shuffle');

module.exports = function createGroups(groupSize, bool, array, object) {
    // If bool is true then shuffle array
    if (bool) {
        array.shuffle()
    }

    // If strongStudents object not passed in
    if (object === undefined) {
        let slicedArray;
        console.log('\n')
        if (array.length > 0) {
            
            for (let i = 0; i < groupSize; i++) {
                console.log(array[i]);
                slicedArray = array.slice(groupSize);
            }
            console.log('\n--------')
            createGroups(slicedArray, groupSize);
        } else {
            console.log(`
    Groups complete!
    Total Students: ${array.length}
    Group Size: ${groupSize} \n`);
        }
    
    
    } 
    // Else if strongStudents object passed in
    else {

        // if yetStrongStudents array still has students to assign to a group
        if (array.length > 0) {
            // Distribute each yetStrongStudent among strongStudents
            Object.keys(object).forEach(key => {
                // Select next student in line  
            let selected = array.shift();
            if (selected) {
                object[key].push(selected); // push student to array
            }
            });
            createGroups(array); // continue loop
        } else if (array.length === 0) { // until no more students available to assign
            console.log('\n', object, '\n'); // print final object with groups
        }

    }
}