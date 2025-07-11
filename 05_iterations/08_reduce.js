const myNums = [1,2,3]

/*
const myTotal = myNums.reduce ( function (acc, currval) {
    console.log(`acc val ${acc} currval val ${currval}`)
    return acc + currval
    
},0)
*/

const myTotal = myNums.reduce( (acc, currval) => acc + currval , 0 )

//console.log(myTotal)

const myshoppingCart = [
    {
        iteamName : "js course",
        price : 999

    },
    {
        iteamName : "python course",
        price : 1999

    },
    {
        iteamName : "c++ course",
        price : 9299

    }
]

const priceToPay = myshoppingCart.reduce((acc, item ) => item.price + acc, 0)

console.log(priceToPay) 