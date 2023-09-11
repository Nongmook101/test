// 1.function declaration
function concat(str1, str2) {
    return str1 + str2
}

// calling function, excute function
console.log(concat('hello', 'world'))

// 2. function expression
const toLower = function(str) {
    return str.toLowerCase()
}

// calling function, execute function
console.log(toLower('HELLOWORLD'))

const doSomething = toLower
console.log(doSomething('HI'))
console.log(typeof doSomething)
const y = toLower('Hey')
console.log(y)
console.log(typeof y)

const doIt = function(op, str1, str2) { //op=concat, str1='good', str2='Goodmorning'
    return op(str1, str2)
}

console.log(doIt(concat, 'good', 'morning'))
console.log(doIt(toLower, 'GOOD', 'MORNING'))

function a() {
    return toLower
}
const m = a()
console.log(m('ABC'))