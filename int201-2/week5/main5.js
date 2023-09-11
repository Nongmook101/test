// 5. create array with Array.from()
const x = Array.of(1, 2, 3, 9 ,10)
const y = Array.from(x)
console.log(x)
console.log(y)
console.log(y.length) 


// memory address of x equals of memory address of
if (x === y) console.log('x === y')
else console.log('x!==y')