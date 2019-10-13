'use strict';

const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

module.exports = async filename => {
    try {
        const data = await readFileAsync(filename, 'utf8');
        return JSON.parse(data);
    } 
    catch (err) {
        throw err
    }
}