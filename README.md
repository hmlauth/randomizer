# @hmlauth/randomizer
<img alt="npm (scoped)" src="https://img.shields.io/npm/v/@hmlauth/randomizer">

Randomizes groups of students.

## Installation
```
npm i @hmlauth/randomizer
```

## Usage

```
const {init, groups} = require('@hmlauth/randomizer');

(async () => {
    
    const studentList = await init('filename.json');
    
    let groupedByAll = groups.distributeRandomly(studentList, 3, true);
    let groupedByStrength = groups.distributeEvenlyByStrengthLevel(studentList, true);
    
})();
```
* `distributeRandomly` accepts 3 arguments:

    - studentList (object)
    - groupSize (number)
    - shouldShuffle (boolean)
* `distrubuteEvenlyByStrengthLevel` accepts 2 arguments:
    - studentList (object)
    - shouldShuffle (boolean)

> Return value is an array of arrays. 

## Set up

1. Create a `.json` file. The object will contain an array of "strong" students and an array of "standard" students.
```
{
    "strong": [
        "name1", 
        "name2", 
        "name3", 
        "name4", 
        "name5"
    ],
    "standard": [
        "name6",
        "name7",
        "name8",
        "name9",
        "name10",
        "name11",
        "name12",
        "name13", 
        "name14",
        "name15",
        "name16",
        "name17",
        "name18"
    ]
}
```


