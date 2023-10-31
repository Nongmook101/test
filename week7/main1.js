const mail = {
    sender: 'SIT, KMUTT',
    recipent: {
      firstname: 'Siriwan',
      lastname: 'Hosaree'
    },
    title: 'Welcome to KMUTT',
    sentDetail: {
      sentDate: new Date(Date.now()),
      host: {
        name: '@sit.kmutt'
      }
    }
  }
//Object destructuring
let {recipent} = mail
let {sentDate: mailDate, title: header} = mail //sentDate, header
const {recipent: {firstname, lastname}} = mail
console.log(firstname)
console.log(lastname)
//host name
const {sentDetail: {host: {name}}} = mail
console.log(name)