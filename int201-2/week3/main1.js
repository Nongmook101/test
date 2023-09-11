// x is a global scope
// ใช้ตัวเเปลเหมือนกันได้ก็ต่อเมื่ออยู่คนละ scope
let x = 1
console.log(x)
{
    // x is a block scope
    let x = 5
    console.log(x)
    var y = 111
}
console.log(y)
x = 10
console.log(x)

function doIt(){
    if(1) {
        // block scope
        let x = 555
        console.log(x)
    }
    else console.log(`not 1`)
    console.log('x: $(x)')
    //runได้เพราะว่ามี #3รองรับอยู่
}
// if(1) {
//     // block scope
//     let x = 555
//     console.log(x)
// }
// else console.log(`not 1`)
console.log(x) // global scope x of line #3

function doSomething() {
    let x = 'A' // function scope
    console.log(x) // 'A'
}
doSomething()
console.log(x) // globalscope x of line #3

let m = 1
// explicit type conversion
console.log(typeof m)
// number -> String
console.log(typeof String(m))
// number -> boolean
console.log(typeof Boolean(m))

// if need boolean but 1 is number, so implicit conversion is called automatically
if(1) console.log('implicit conversion is working')


