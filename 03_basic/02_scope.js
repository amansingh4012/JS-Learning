let a = 10
const b = 20
var c = 30

if(true){
    let a = 30;
    const b = 400;
  //  var c = 451

}

//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username ="hitesh"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    two()

}

//one()

if(true){
    const username = "Anuj"
    if(username=== "Anuj"){
        const website = " youtube"
       // console.log(username + website)
    }
    //console.log(website)
}
    //console.log(username)



    //*******************************intresting  */
 
    function addone(num1){
        return num1 + 1
    }
console.log(addone(5))   
   
 
    const addtwo = function(num2){
        return num2 + 2
    }
console.log(addtwo(7))     // => cant call this type of function before intialization because the function store in variable 
   