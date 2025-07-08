//const tinderUser = new Object() => singleton object
const tinderUser = {} // => Non-Singleton Object


 tinderUser.id = "12345abc"
 tinderUser.name = "Sammy"
 tinderUser.IsLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "hello@mail.com",
    fullname: {
            userFullName: {
                    firstName: "Hitesh",
                    MiddleName: "Kumar",
                    lastName: "Singh"

            }
    }
}

//console.log(regularUser.fullname.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 3: "b"}

const obj3 = {5: "a", 6: "b"}

//const obj4 = Object.assign( {}, obj1, obj2, obj3)  // => assign means the obj2 and obj3 get assign in obj1 thats why we use {} before 
                                                //    obj1 to make new object where all obj1 , obj2, obj3 get assign
//console.log(obj4)
//console.log(obj1 === obj4)
//console.log(obj1)

const obj4 = {...obj1, ...obj2,...obj3}
//console.log(obj4)
//console.log(obj1)

const users = [  {
        id : "aman",
        email: "anuj@gmail"
    },
     {
        id : "aman",
        email: "anuj@gmail"
    },
     {
        id : "aman",
        email: "anuj@gmail"
    },
     {
        id : "aman",
        email: "anuj@gmail"
    }
]
  

//console.log(users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('name'))
