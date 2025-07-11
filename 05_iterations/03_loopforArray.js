// for of 

// ["",","]
// [ {}, {}, {}]

const arr = [1, 2, 3, 4, 5]     /// for of --> val print the content of array not the index value

for (const val of arr) {
   // console.log(val)
    
}


const greetings = " hello of world! " 

for (const greet of greetings) {
    //console.log(`character of  greetings is ${greet}`)
}



/// maps                                           ---> for of loop iterate the maps 
const map = new Map()
map.set('IN', 'india')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
//console.log(map)


for (const [key , value] of map) {
  //  console.log(key ,'-->', value)
}

/** const myObj = {     =============> object cannot iterate like maps or with for of loop
 * 
    'game1': 'nfs',
    'game2': 'spiderman'
}

for (const [key, value] of myObj) {
    console.log([key, '->', value])}
    */


