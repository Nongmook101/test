const st1 = {
    studentId : 65100080, 
    firstname : "Siriwan", 
    lastname : "Hosaree"
}

const st3 = {
    firstname : "Sukjai", 
    lastname : "Jinge", 
    studentId : 65100070
}
const st4 = {
    firstname : "Sukjai", 
    lastname : "Jinge", 
    studentId : 65100070
}

const st2 = st1
console.log(st1 === st3)
console.log(st1 === st2)
console.log(st3 === st4)

// create  compare function to compare two students
function compareStudent(sr1,st2) {
    return st1.studentId === st2.studentId
}
console.log(compareStudent(st1,st2))
console.log(compareStudent(st3,st4))
console.log(compareStudent(st1,st3))