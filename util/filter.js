'use strict';


Object.filter = (obj, desiredStrengthLevel, predicate) => 
    Object.keys(obj)
        .filter( key => predicate(obj[key], desiredStrengthLevel) )
        .reduce( (acc, key) => (acc[key] = obj[key], acc), {} )


function hasStrengthLevel(strengthLevel, desiredStrengthLevel) {
     return strengthLevel === desiredStrengthLevel
}


module.exports = { 
    Object, 
    hasStrengthLevel 
};