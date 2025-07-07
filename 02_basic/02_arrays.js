const marvel_heroes = [ "thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)

//const all_heroes = marvel_heroes.concat(dc_heroes)
//console.log(all_heroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
//console.log(all_new_heroes)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_arr = another_array.flat(Infinity)

console.log(real_another_arr)


console.log((Array.isArray('hitesh')))
console.log(Array.from("anuj"))
console.log(Array.from({name: "Anuj"}))  // ==> interesting 

let score1= 100, score2 = 2000, score3 = 300;
console.log(Array.of(score1, score2, score3))