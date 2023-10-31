const obj1 = {}
const obj2 = {id: 1}

if (obj1 == {}) console.log('object is an empty')
else console.log()

console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj2))

if (JSON.stringify(obj1) === '{}') console.log('object is an empty')
else console.log('object is not empty')
if (JSON.stringify(obj2) === '{}') console.log('object is an empty')
else console.log('object is not empty')

function isEmpty(obj) {
    return JSON.stringify(obj) === '{}'
}
console.log(isEmpty(obj1))
console.log(isEmpty(obj2))