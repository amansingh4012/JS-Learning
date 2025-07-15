

/**const user = {
    username: "Aman ",
    loginCount: 8,
    signedIn : true,

    userDetail: function(){
        //console.log("Got user detail from database");
       // console.log(this)
    }

}*/

//console.log(user.username)
//console.log(user.userDetail())

//console.log(this)

//const promiseOne = new Promise()     --->here 'new' is a constructor function 
//const myDate = new Date()

function user(username, loginCount, isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn


    this.Greeting = new function(username){
        console.log(`welcome : ${this.username}`)
    }

    return this

}

const userOne = new user("aman", 12, true)
const userTwo = new user("Anuj", 22, false)

console.log(userOne)
console.log(userTwo)