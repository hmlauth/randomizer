module.exports = {
    print: object => {
        for (const key in object) {
            console.log(key);
            object[key].forEach(student => console.log(student));
            console.log(`\n`);
        }
        console.log('Groups complete!\n'); 
    }
};

