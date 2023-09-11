const $a = 3
// $a = 10
const _b1c = 1
console.log($a)
console.log(_b1c)

let x = 1
console.log(typeof x)
//weekly and dynamic data types
console.log(x)
x = 'A'
console.log(x)
console.log(typeof x)
x = true
console.log(typeof x)
console.log(typeof undefined)
console.log(typeof null)

//array uses []
let nums = [1, 3, 5, 7, 9]
console.log(typeof nums)
//object use {}, {propertyKey1: propertyValue1, propertyKey2: propertyValue2}
const obj = {id: 1, tittle: 'JS'}
console.log(typeof obj) //object

// obj = nums // erroor, not allow
nums = obj
nums.id = 555
console.log(nums)
console.log(obj)

// ids is an array type
// เปลี่ยน 1001 เป็น 1
const ids = [101, 105, 110, 120]
ids[0] = 1
console.log(ids)
//เพิ่มเเบบเเทนที่
ids[ids.length - 1] = 444
console.log(ids)
// เพิ่มตัวเลข
ids[ids.length] = 121
console.log(ids)

let m,
    n,
    o = 1
    p = true,
    q = null

console.log(m)
console.log(n)
console.log(o)
console.log(p)
console.log(q)

if (m === undefined) console.log('m is undefined')
if (q === null) console.log('q is null')
// == check only value, do not care data type
if ('2' == 2) console.log(`'2' == 2`)
// == check data type first, if the data type does not match then return false
//otherwise value will be check.
if ('2' === 2) console.log(`'2 === 2'`)
else console.log(`'2' !== 2`)

if (typeof m === 'undefined') console.log(`typeof m ==='undefined'`)
// null has typeof object
if (typeof q === 'object') console.log(`typeof q ==='object'`)

function doSomething(activity){
    return activity
}

console.log(doSomething('online learning'))
console.log(typeof doSomething)

// {
//     1.object
//     2.ครอบคำสั่งที่มีมากกว่า1คำสั่งได้
// }

function number() {
    let x =5
    const y = 5
    var z = 5
}
// console.log(x)
// console.log(y)
// console.log(z)

