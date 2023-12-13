//65130500080

function isPasswordValid(password) {
// solution 1
  // if (password === undefined || password === null ||password.length < 8) return false
  // let counter = 0
  // const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  // const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  // const chars = ['@', '#', '$', '%', '^', '&', '*', '!']

  // for(const n of nums) {
  //   if (password.includes(n)) {
  //       counter++
  //       break
  //     }
  // }

  // for(const a of alphabets) {
  //   if (password.includes(a)) {
  //     counter++
  //     break
  //   }
  // }

  // for(const a of alphabets) {
  //   if (password.includes(a.toUpperCase())) {
  //     counter++
  //     break
  //   }
  // }
 
  // for(const c of chars) {
  //   if (password.includes(c)) {
  //     counter++
  //     break
  //   }
  // }
  
  // return counter === 4


// solution 2
//   if (password === undefined || password === null ||password.length < 8) return false
 
//   const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//   const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//   const chars = ['@', '#', '$', '%', '^', '&', '*', '!']
  
//  if (!nums.some((n) => password.includes(n))) return false
//  if (!alphabets.some((a) => password.includes(a))) return false
//  if (!alphabets.some((a) => password.includes(a.toUpperCase()))) return false
//  if (!chars.some((c) => password.includes(c))) return false

// return true

// solution 3
if (password === undefined || password === null ||password.length < 8) return false

if (!password.match(/[0-9]/)) return false
if (!password.match(/[a-z]/)) return false
if (!password.match(/[A-Z]/)) return false
if (!password.match(/[@#$%^&*!]/)) return false

return true

  
}

module.exports = isPasswordValid
