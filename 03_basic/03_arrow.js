/**const user ={
    username : "Anuj",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
       // console.log(this) => refer then context of this object
    }


}
 * */

//user.welcomeMessage()
//user.username = "Aman"
//user.welcomeMessage()
//console.log(this) // => empty object  
/** 
function chai(){
    username = "AMAN";
    console.log(this.username)
}

chai()**/

/**
 * const chai = function(){
    username = "Anuj"
    console.log(this.username)
}

chai()
 */

/**
 * const chai = () => {
    username = "Anuj"
    console.log(this.username)
}

chai()
 */

/** const addTwoNumber = (num1, num2) => {        ====> explicit return here we have to use braces {}
        return num1 + num2 

}

console.log(addTwoNumber(3,4))*/
/**
const addTwoNumber = (num1,num2) => (num1+num2 )   // =>> implicit return here we can not use braces {} if we do required return key
console.log(addTwoNumber(5,7))

 */



// now return object 

const user = () =>  ({username: "Anuj"})

console.log(user())