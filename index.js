const { getStudents } = require('./init/index');
const {createGroups} = require('./create/create');

console.log(getStudents);
console.log(createGroups);

module.exports = { getStudents, createGroups };



