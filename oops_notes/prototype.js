// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()


// Inheritance 
const User = {
    username: "Anuj",
    email: "anuj@aman"
}



const teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={
    makingAssignment : "js Assignment",
    fullTime : true,
    __proto__: TeachingSupport

}
teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)


let anotherUsername = "chaiAurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is : ${this.trim().length}`)

}

anotherUsername.trueLength()
"chai".trueLength()
"Anuj ".trueLength()