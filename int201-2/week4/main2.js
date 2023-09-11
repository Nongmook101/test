//nullish Coalescing (??)
// [] represents an empty array
// {} represents an empty object
// let arr = []//undefined
// arr = arr ?? [1, 2, 3]
// console.log(arr)
// console.log(arr.length)

let nums = [1, 2, 3]
let arr
arr = nums ?? []
console.log(nums)
console.log(arr)

