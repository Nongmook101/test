let someone = 'a' // empty string
let who // who = undefined
console.log(typeof someone) //string
let discount = 0
var x = 5
console.log(x) //5
if (someone) {
    var x = 1
    console.log(x) //1
    who = 'member'
    discount = 0.1
}else {
    var x = 2
    console.log(x) //2
    who = 'guest'
    discount = 0.05
}
console.log(x) //5
console.log(who)
console.log(discount)
//?: if-else with expression 
// who = someone ? 'member' : 'guest'
// console.log(who) //guest