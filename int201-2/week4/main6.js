let str1 = 'apple'
let str2 = 'Apple'
let str3 = 'APPLE'
let str4 = 'apple'

console.log(str1 === str2) // 'a' === 'A' return false
console.log(str1 !== str2) // 'a' !== 'A' return true
console.log(str1 !== str4) // 'a' === 'a', 'p' === 'p', 'p' === 'p', 'l' === 'l', 'e' === 'e' return false

console.log(str1 < str2) // 'a' < 'A' 97 < 65 return false4

console.log(str1.includes('App')) //false
console.log(str1.includes('app')) //true

//includes with case insensitive
console.log(str1.toLowerCase().includes('App' .toLowerCase()))
console.log(str1.toLowerCase().includes('APP' .toLowerCase()))