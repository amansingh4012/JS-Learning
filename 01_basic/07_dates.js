// dates
/** 
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(typeof myDate) **/

//let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 15, 44)
//let myCreatedDate = new Date("2023-05-01")
let myCreatedDate = new Date("05-22-2023")

//console.log(myCreatedDate.toLocaleString());


//let myTimeStamp = Date.now()
//console.log(myTimeStamp)

//console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate.getMonth()+1)

newDate.toLocaleString('default', {
    weekday: "long",
})
