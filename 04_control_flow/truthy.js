const userEmail = []

if(userEmail){
    console.log("got user email")
}
else{
    console.log("dont have user email")
}

/** falsy value
 * false, 0 , -0, Bigint 0n, "", null , undefined, NaN
 */

/**truthy
 * "0", 'false', ' ', [], {}, function(){}
 * 
 * 
 */

const emptyarr = []

if(emptyarr.length === 0 ){
   // console.log("EMpty array")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
   // console.log("Empty Object")
}

//************************************************************* */

/// Nullish Coalescing Operator (??): null undefined

let val1 ;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 20
//val1 = null ?? undefined ?? 10
//val1 =   undefined ?? null
//console.log(val1)

//********************************************************************
// terniary operator 

// cond ? true : false

const icePrice = 80
icePrice > 100? console.log("yes") : console.log("no")