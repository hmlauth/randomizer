'use strict';


Object.filter = (obj, desiredStrengthLevel, predicate) => 
    Object.keys(obj)
        .filter( key => predicate(obj[key], desiredStrengthLevel) )
        .reduce( (res, key) => (res[key] = obj[key], res), {} )



function hasStrengthLevel(strengthLevel, desiredStrengthLevel) {
     return strengthLevel === desiredStrengthLevel
}


module.exports = { 
    Object, 
    hasStrengthLevel 
};