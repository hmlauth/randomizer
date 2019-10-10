const { shuffle } = require('../prototypes/shuffle');
const { byAllStudents, byStrength } = require('./groups');

module.exports = {
    createGroups: (...args) => {
        let [groupSize, bool, object] = args;

        switch (Object.keys(object).length) {

            case 2:
                let { strongStudents, yetStrongStudents } = object;
                if (bool) { yetStrongStudents.shuffle(); }
                byStrength(yetStrongStudents, strongStudents);
                break;

            case 1:
                const { allStudents } = object;
                if (bool) { allStudents.shuffle(); }
                byAllStudents(groupSize, allStudents, allStudents.length);
                break;

        }
    }
}