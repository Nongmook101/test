const keywords = ['destructuring', 'spread', 'rest', 'prototypes', 'function']
const mails = [
  {
    id: 12323502,
    sender: {
      firstname: 'Siriwan',
      lastname: 'Hosaree'
    },
    subject: 'Welcome to SIT, KMUTT'
  },

  {
    id: 55588811,
    sender: {
      firstname: 'Tisanai',
      lastname: 'Chat'
    },
    subject: 'Reminder: INT201 Class'
  }
]

keywords.forEach((keyword) => console.log(keyword))
keywords.forEach((keyword) => console.log(keyword[0]))
let firstChars = ''
keywords.forEach((keyword) => (firstChars += keyword.charAt(0)))
console.log(firstChars)
// mails.forEach((mail) => console.log(mail))

keywords.push('optional chaining')
console.log(keywords)

const mailIds = []
mails.forEach((mail) => mailIds.push(mail.id))
console.log(mailIds)

const keyWord = keywords.filter((keyword) => keyword.toLowerCase().includes('es'))
console.log(keyWord)

const mailSenders = mails.map((mail) => mail.sender.firstname)
console.log(mailSenders)


const result = mails.map((mail) => 'logId-' + mail.id)
console.log(result)