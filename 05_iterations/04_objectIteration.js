const myobject = {
    js : 'javascript',
    cpp: "c++",
    swift: 'swift by apple'
}

for (const key in myobject) {
  // console.log(`${key} is file extension of ${myobject[key]}`)
}


const program = ['java', 'c++', 'python', 'rb']   /// for in --in  array the key is the index value of array

for (const key in program) {
   // console.log(program[key])
}


/// maps                       // for in loop does not work to iterate the maps
const map = new Map()
map.set('IN', 'india')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
//console.log(map)


for (const [key , value] in  map) {
 //  console.log(key ,'-->', value)
}