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


console.log(loginUserMessage('Aman'))

