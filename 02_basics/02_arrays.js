const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//javascript method-- 1. push method -- to add the 2 array in  single array
// marvel_heros.push(dc_heros)

// console.log("push mathod", marvel_heros);
// console.log("push mathod", marvel_heros[3][1]);

// javascript methods -- 2. concatenatesb methods of javascript ----- basically is used to join the two individual array

const allHeros = marvel_heros.concat(dc_heros);
console.log("concatenats methods ", allHeros);

//spread operator -- we prefer this to do generaty task

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


// Now by using the Flat Methods --- [] this called as dept, if you want to not count  and use the dept then use the infinity  at the place of dept number
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // to check is it array or not
console.log(Array.from("Hitesh")) //
console.log(Array.from({name: "hitesh"})) // interesting-- we have define that keys  ya values  ka array banao define karna hoga

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // returns new array elemts from sets of  array elements