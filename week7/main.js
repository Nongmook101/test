//function declaration
function arrayStats(arr) {
    //min, max, sum, avg
    if (arr === null || arr === undefined)
    return {}
    let min = arr[0], 
        max = arr[0], 
        sum = 0 
        avg = 0
       
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]
        if(arr[index] < min) min = arr[index]
        if(arr[index] > max) max = arr[index]
    }
    return {sum: sum, avg: sum / arr.length, min: min, max: max }
   
} 
console.log(arrayStats([2, 3, 4, 5]))
console.log(arrayStats([5, 7, 8, 9]))