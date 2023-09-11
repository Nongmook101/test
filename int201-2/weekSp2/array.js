//  Single datatype Array
const fruit = ["Apple", "Papaya", "Banana", "Orange"]



//  Multiple datatype Array
const mixedData = [1, "Goodito Fujiko", { age: 45, sex: "male" }]

// Datatype of mixedData[0] = 
// Datatype of mixedData[1] = 
// Datatype of mixedData[2] = 



const students = [
    {
        id: 1,
        name: "Goodito Fujiko",
        age: 20
    },
    {
        id: 5,
        name: "Dimitri Petrenko",
        age: 22
    },
    {
        id: 10,
        name: "Rico Rodriguez",
        age: 21
    },
    {
        id: 3,
        name: "Lena Oxton",
        age: 28
    },
    {
        id: 2,
        name: "Mary Somers",
        age: 39
    }
]



//  Array.filter()
const filteredStudents = []



//  Array.sort()
const numbers = [1,4,5,2,3,0]






//  Array.splice
const food = ["Omlete", "Tom Yam Shrimp", "Kra Phow Crispy Pork", "Ramen"]

// Array.splice(<ตำแหน่ง index เริ่มต้น>,<จำนวน index ที่จะลบ>,<Element ที่จะใส่เข้าไป>)
//  ต้องการที่จะใส่ "Pad Tai" เข้าไปใน Array






//  ถ้าอยากลบ Ramen โดยใช้ indexOf ล่ะ?
let selectedIndex = food.indexOf("Ramen")
console.log(selectedIndex)
food.splice(selectedIndex, 1, "Pai Tai")
console.log(food)




//  กรอง students ที่มีอายุน้อยกว่า 25 ปี
const selectedStudents = students.filter (
    (element, index, array) => {
        //Return boolean required
        return element.age < 25

    }
    // element : each element of the array
    // index : index of selected element
    // array : source of element
)
console.log(selectedStudents)

//  เรียงข้อมูลใน students ตาม 
students.sort(
    (studentA,studentB) => {
       // return integer required
       // If integer is negative (-) mean A less than B
       // If integer is 0, mean A equals B
       // If integer is positive(+), means A more than B
       return studentA.id - studentB.id
    }
    //studentA : first value to compare
    //studentB : second value to compare
)
