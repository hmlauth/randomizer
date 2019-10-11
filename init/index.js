const fs = require('fs');
const util = require('util');
const { createArray, createReferences } = require('../create/references');
const readFileAsync = util.promisify(fs.readFile);

// Read student lists
// return student lists in appropriate format (array, object)
module.exports = {
    getStudents: async filename => {
        
        try {

            const studentList = await readFileAsync(filename, 'utf8');
            const organizedByStrength = studentList.split('\n').indexOf('STRONG') > -1 ? true : false;
    
            if (organizedByStrength) {
                const byStrength = await createReferences(studentList);
                return byStrength
                
            } else {
                const allStudents = await createArray(studentList);
                return {allStudents}
            }
    
        } 
        
        catch (err) {
           alert(err)

        }
    }
}