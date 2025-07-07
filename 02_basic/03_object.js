// singleton

// object literals 

const mySym = Symbol("key1")

const jsUser = {
    name : " anuj",
    [mySym] : "myKey1",
    "full name" : "Anuj Kumar Singh",
    age : 25,
    location: "varanasi",
    email: "anuj.as242@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]



}

//console.log(jsUser.email)
//console.log(jsUser["email"])
//console.log(jsUser["full name"])
//console.log(jsUser[mySym])

jsUser.email = "anujaman@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "amananuj@gmail.com"
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js User")
    
}

jsUser.greetingTwo = function(){
    
    console.log(`hello js user, ${this["full name"]}`)
}


console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())