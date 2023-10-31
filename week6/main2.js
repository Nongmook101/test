//Object
//1. create object with object literals

const st1 = {studentId : 65100080, firstname : "Siriwan", lastname : "Hosaree"}
console.log(typeof st1)
console.log(st1)
const st2 = {} // empty object {} === const st2 = new Object()
console.log(Object.prototype.isPrototypeOf(st2))
console.log(typeof st2)
console.log(Object.keys(st1)) //array of property key
console.log(Object.values(st1)) //array of property value

const st3 = {firstname : "Sukjai", lastname : "Jinge", studentId : 65100070}
console.log(st3)
//composite object
const st4 = {
    firstname : "Sukjai", 
    lastname : "Jinge", 
    studentId : 65100070,
    address : {province : "Bangkok", country : "Thailand"},
    // getFullname : function () {
    //     return `${this.firstname} ${this.lastname}`
    // }

    // remove : function
    getFullname() {
        return `${this.firstname} ${this.lastname}`
    }
}
console.log(st4)
// get property 1.) object.propertyKey 2.)objectname["propertykey"]
console.log(st4.firstname)
console.log(st4['lastname']) // dynamic key
//dynamic property : add a new one, update or delete existing propert
st4.email = "siriwan.hosa@kmutt.ac.th" // add a new property
st4.firstname = "Donny" //edit property value
delete st4.email // delete a property
st4.getAddress = function () {
    // add a new property that stores function
    return this.address
}
console.log(st4.address.country)
console.log(st4['address']['country'])
console.log(st4)
console.log(Object.prototype.isPrototypeOf(st4))
console.log(Date.prototype.isPrototypeOf(st4))



// propertty value can store function
const   st5 = {
    firstname : "Nuni", 
    lastname : "NoNim", 
    studentId : 65100070,
    getFullname : function () {
        return `${this.firstname} ${this.lastname}`
    }
}
console.log(st5.getFullname())

// constructor function
function Person(id, fn, ln){
    this.id = id
    this.firstname = fn
    this.lastname = ln 
}

// 2. create object by using constructor function
const p1 = new Person(1001, 'Mook', 'Tong')
const p2 = new Person(1002, 'Dear', 'Ning')
const p3 = new Person(1003, 'Vee', 'Kwa')
console.log(p1)
console.log(p2)
console.log(p3)
p1.email = "Mook@gmail.com"
// Object prototype <-Person prototype<-p1
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Object.prototype.isPrototypeOf(p1))

// 3. create object by using Class
// javascript is a prototype based, not class based
class Circle {
    constructor(r) {
        this.radius = r
    }
    //shared method among circle objects
    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    getRadius() {
        return this.radius
    }
}

const c1 = new Circle(2)
const c2 = new Circle(3)
const c3 = new Circle(4)
console.log(c1.area())
console.log(c2.area())
console.log(c3.area())
console.log(c1.getRadius())
console.log(c2.getRadius())
console.log(c3.getRadius())
console.log(Object.prototype.isPrototypeOf(c1))
console.log(Circle.prototype.isPrototypeOf(c1))

//const p1 = new Person(1001, 'Mook', 'Tong')

const pp1 = Object.create(p1)
console.log(pp1)
console.log(pp1.id)
console.log(pp1.firstname)
console.log(pp1.lastname)
console.log(Object.prototype.isPrototypeOf(pp1))
console.log(Person.prototype.isPrototypeOf(pp1))
pp1.hobbies = ['reading', 'swimming']
console.log(pp1)