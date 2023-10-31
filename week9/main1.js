function ops(n1 = 'F', n2 = 'false', n3 = 'unknown') {
    return {n1, n2, n3}
}
console.log(ops())
console.log(ops('A'))
console.log(ops('A', true))
console.log(ops('A', true, 'Somchai'))
console.log(ops(undefined, undefined, undefined))
console.log(ops(null, null, null))
console.log(ops('A', 'Somchai', undefined))