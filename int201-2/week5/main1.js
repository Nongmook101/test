const students = [
    {id:644500101, name: 'Somchai'},
    {id:644500102, name: 'John'},
    {id:644500103, name: 'Somsak'}
]
console.log(students.length) //3
console.log(students[0]) // {id:644500101, name: 'Somchai'}

const studentIds = [
    [1001, 1002, 1005], 
    [5543,5466], 
    [2354,5242], 
    [345] 
]
console.log(studentIds.length) // 4
console.log(studentIds[1]) // [ 5543, 5466 ]
console.log(studentIds[studentIds.length-1]) // [ 345 ]
console.log(studentIds[0][1]) // 1002