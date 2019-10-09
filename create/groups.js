function byAllStudents(groupSize, array, length) {
    let slicedArray;
    console.log('\n');
    if (array.length > 0) {
        
        for (let i = 0; i < groupSize; i++) {
            console.log(array[i]);
            slicedArray = array.slice(groupSize);
        }
        console.log('\n--------');
        byAllStudents(groupSize, slicedArray, length);
    } else {
console.log(`
Groups complete!
Total Students: ${length}
Group Size: ${groupSize} \n`);
    };
};

function byStrength(array, object) {
    let keysInObject = Object.keys(object);
     // if yetStrongStudents array still has students to assign to a group
     if (array.length > 0) {
        // Distribute each yetStrongStudent among strongStudents
        keysInObject.forEach(key => {
            
            // Select next student in line  
            let selected = array.shift();
            if (selected) {
                object[key].push(selected); // push student to array
            }
        });

        byStrength(array, object); // continue loop

    }
    else if (array.length === 0) { // until no more students available to assign
        console.log('\n', object, '\n'); // print final object with groups
    }

};

 module.exports = {
     byAllStudents, 
     byStrength
}
