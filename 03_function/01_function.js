function myName() {
    console.log("a")
    console.log("b")
    console.log("c")
    console.log("d")
    console.log("e")
}

//myName()

/**function addTwoNumber(n1, n2) {
    let n3 = n1 + n2 ;
    console.log(n3)
   return n3
}**/

function addTwoNumber(n1, n2) {
    /**let n3 = n1 + n2 ;
    
   return n3 **/

   return n1 + n2;

}

//addTwoNumber(1 , 3)

const result = addTwoNumber(4,5)
//console.log("result", result)

function loginUserMessage(username) { // =>> (username = "sam") to get deafault value if not enter anything 
    if(username === undefined)
    {
        console.log("please enter user name")
    }

    else{
        return `${username} just logged in`
    }
    
}


//console.log(loginUserMessage('Aman'))

function CalculateCartPrice(var1, var2, ...num1){
    return num1
}

//console.log(CalculateCartPrice(1000, 5000, 3000))

const user = {
    username : "Aman",
    price : 199
}

function handleObj(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObj(user)

// object can define on calling the funtion for object and key must be same in functions and object 
/**handleObj({
    username: "Anuj",
    price: 299
})**/


// Same for array

const myArr = [100,200,300,500]

function returnSecondValue(anyArr){
    return anyArr[1]
}

//console.log(returnSecondValue(myArr))
console.log(returnSecondValue([500,256,300,476]))