class Person {
      constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
      }
      getFullName() {
        
        return `${this.lastName}, ${this.firstName}`
      }

      isEqual(anotherPerson) {
        return (
            this.firstName.toLowerCase() === anotherPerson.firstName.toLowerCase() &&
            this.lastName.toLowerCase() === anotherPerson.lastName.toLowerCase()
        )
      }

      getAge() {

        //returns the number of milliseconds
        const currentDateMilli = Date.now()
        const birthDateMilli = this.dateOfBirth.getTime()
        const diffMilli = currentDateMilli - birthDateMilli
        console.log(currentDateMilli, birthDateMilli, diffMilli)
        const diffDate = new Date(diffMilli)
        return diffDate.getFullYear() - 1970

      }

      toString(){
        return `${this.getFullName()}, ${this.getAge()}`
      }
}
const p1 = new Person("Siriwan", "Hosaree", new Date(2003, 8, 27))
console.log(p1.getAge())
const p2 = new Person("Ratikorn", "Damgurn", new Date(2003, 8, 13))
console.log(p1.getFullName())
console.log(p2.getFullName())
console.log(p2.isEqual(p1))
console.log(p1.isEqual(p1))
console.log(p1.toString())




