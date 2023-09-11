//การตั้งชื่อ identifier (function)
//1.ห้ามขึ้นต้นด้วยตัวเลข 
//2.ขึ้นต้นด้วยตัวเล็กตัวใหญ่ก็ได้เเต่ห้ามซ้ำกัน(case sensitive)
//3._,$ ขึ้นต้นได้เป็นส่วนหนึ่งของชื่อได้
function greeting(someone){
   // return "hello" + someone
   //backtick ``
   return `hello, ${someone}`
}
console.log("Good Morning")
//การตั้งตัวแปร
//var ไม่ควรใช้ มีโอกาสทำให้เกิดข้อผิดพลาดของโปรแกรม
let name="Siriwan Hosaree"
console.log(name)
const totalstudent = 70
name = 100 //dynamic and weakly type
console.log(name)

console.log("My name is Siriwan Hosaree")
console.log("Good Bye")
console.log(greeting('Siriwan hosaree'))
const obj = {id : 101}
const std={id:65130500080, name:'Siriwan'} //object is a correction of property
// one property contains key and value (key:value)
//std = obj ไม่สามารถทำได้
std.name = 'Siriluk'
console.log(std)
const nums = [5, 10, 15, 20] //array
console.log(nums)

// const i = 5
// i = 10 ไม่สามารถทำได้

//Expression
//let a='INT201' .toLowerCase()+'Siriwan' +Math.random()