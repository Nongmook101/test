// array can contain different data types in one array
const x = [1, true, 'A']
console.log(x)
console.log(x.length) // length is size of array
console.log(x[0]) // geet the first element of array
// array size can grow dynamically
x[1] = false //เปลี่ยนค่าในตารางได้เลย
x[x.length] = 555 // append a new element
x.push(888)
console.log(x)
// x[expression to find index number]
console.log(x[x.length-1]) // get the last element of array

const y = [] // y is an empty array
let z // undefined

console.log(typeof y)
console.log(typeof z)

if(y.length===0) console.log('y is an empty array')
else console.log('y is not an empty array')

if(z?.length===0) console.log('z is an empty array') //ถ้าไม่อยากerrorให้ใส่?
else console.log('z is not an empty array')