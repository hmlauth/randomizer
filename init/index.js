const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

// Read student lists
// return student lists in appropriate format (array, object)
module.exports = {
    getStudents: async filename => {

        try {
            const data = await readFileAsync(filename, 'utf8');
            return JSON.parse(data);
        } 
        
        catch (err) {
           throw err
        }
    }
}

data = ['STRONG', ]