const { shuffle } = require('../prototypes/shuffle');
const { byAllStudents, byStrength } = require('./groups');
// TODO: Consider spread operator ...args

module.exports = function createGroups(...args) {
    let [groupSize, bool, array, object] = args;

    // Shuffle array if true
    if (bool) { array.shuffle(); }

    switch (args.length) {
        case 4:
            byStrength(array, object);
            break;
        case 3:
            byAllStudents(groupSize, array, array.length);
            break;
    }

}