module.exports = {
    createArray: async (students) => {
        try {

            return students.split('\n');
             
         } catch (err) {
             console.log(err)
         }
    },
    createReferences: async (studentsByStrength) => {
        try {

            let students = studentsByStrength.split('\n').slice(1);
            let yetStrongIndex = students.indexOf('YETSTRONG');
            let yetStrongStudents = students.slice(yetStrongIndex + 1);
            let strongList = students.slice(0, yetStrongIndex);
            let strongStudents = {};
            strongList.forEach(cv => strongStudents[cv] = []);
           
            return {strongStudents, yetStrongStudents}
    
        } catch (err) {
            console.log(err)
        }
    }
}