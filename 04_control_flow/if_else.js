// IF

/**
 const isUserloggedIn = true

if(true){                      //  ====>>>> agar condition true hoga tabhi if k andar jayega 

}
 */


// condition <, > , <= , >= , == , !=, === , !==

/**const score = 300;

if(score>100){
    var power = "fly";
    console.log(`user power ${power}`)
}
console.log(`user power ${power}`) */

// shorthand notation

const balance = 1000

//if(balance>100) console.log("test")

const isUserloggedIn = true;
const debitcard = true
const loginGoogle = true
const loginemail = false

if(isUserloggedIn && debitcard){
    console.log("user can buy")
}

if(loginGoogle || loginemail){
    console.log("user  logged in")
}