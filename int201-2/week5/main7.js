const x = [1, 3, 5]
const y = [2, 4, 6, 8, 10, 12]


// destructing array
const [a] = x //a=x[0]
// 0 use a rest operator
const [m, n, ...o] = y //m=y[0], n=y[1], o=y[2], y[3]
console.log(a) //1
console.log(m) //2
console.log(n) //4
console.log(o) //6
// ... in front of x is a spread operator
const z = [...x, 2, 4, ...x]
console.log(z)

// destructuring with skip element
const [, e] = x
console.log(e)

const [k, l, , ...h] = y
console.log(k)
console.log(l)
console.log(h)