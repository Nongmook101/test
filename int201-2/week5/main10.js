// primetive parameter passing
function double(a) {
    a = a * 2
    return a
}
let m = 5
console.log(double(m))
console.log(m)

//object parameter passing
function update(a) {
    a[0] = 555
}
const n = [1, 2, 3]
console.log (update(n))
console.log(n)