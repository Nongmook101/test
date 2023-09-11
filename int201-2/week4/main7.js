let score = 50
let grade
// <40 => 'F', 40-70 => 'B', 71-100 => 'A'
if(score < 0 || score > 100) grade = 'invalid scores'
else {
if(score <= 40) grade = 'F'
else if(score <= 70) grade = 'B'
else grade = 'A'
}
console.log(grade)

let gradeMeaning
switch (grade) {
    case 'F':
        

}