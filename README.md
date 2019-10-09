# @hmlauth/randomizer
<img alt="npm (scoped)" src="https://img.shields.io/npm/v/@hmlauth/randomizer">

Randomizes groups of students.

## Installation
```
npm i @hmlauth/randomizer
```

## How to use
1. Create 2 `.txt` files at the root of your directory. The first will contain your full student roster and the second will contain students divided into two categories: `strong` and `yetStrong`. I recommend the following filenames:

    - `students_roster.txt`
    - `students_strengths.text`

2. Add students to each file (examples below). 

    - (<em>required</em>) Each student must be on a different line.
    - (<em>required</em>) No extra lines are used. 
    - (<em>optional</em>) First and last names. 

`students_roster.txt`
```
1  firstName1 lastName1
2  firstName2 lastName2
3  firstName3 lastName3
4  firstName4 lastName4
5  firstName5 lastName5
6  firstName6 lastName6
7  firstName7 lastName7
8  firstName8 lastName8
9  firstName9 lastName9
10 firstName10 lastName10
11 firstName11 lastName11
12 firstName12 lastName12
13 firstName13 lastName13
14 firstName14 lastName14
15 firstName15 lastName15
16 firstName16 lastName16
17 firstName17 lastName17
18 firstName18 lastName18
```

`students_strengths.text`

```
1 STRONG
2  firstName1 lastName1
3  firstName2 lastName2
4  firstName3 lastName3
5  firstName4 lastName4
6  firstName5 lastName5
7  YETSTRONG
8  firstName6 lastName6
9  firstName7 lastName7
10 firstName8 lastName8
11 firstName9 lastName9
12 firstName10 lastName10
13 firstName11 lastName11
14 firstName12 lastName12
15 firstName13 lastName13
16 firstName14 lastName14
17 firstName15 lastName15
18 firstName16 lastName16
19 firstName17 lastName17
20 firstName18 lastName18
```
3. In the file where you require `randomizer`, extract `init` and `createGroups`.

    - `init` is an object containing two functions, each accept their respective file name as an argument:
        * `allStudents()` 
        > returns an object with one member: allStudents (array)
        * `byStrength()` 
        > returns an object with two members: strongStudents (object) and yetStrongStudents (array)

    - `createGroups()` is a function that accepts up to 4 arguements
        * `groupSize` - Number of people per group 
        * `boolean` - True/false if you would like students shuffled
        * `object` - Students to be organized

```
const {init, createGroups} = require('@hmlauth/randomizer');

const allStudents = init.allStudents('students_roster.txt');
createGroups(4, true, allStudents);

const studentsByStrength = init.byStrength('students_strengths.txt');
createGroups(null, true, studentsByStrength);
```

