const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)//push change in existing array
console.log(marvel_heros);// it returns array of array
//['thor','Ironman','spiderman',['superman','flash','batman']] but it is not a good syntax
//and if we want superman
console.log(marvel_heros[3][0])

const allHeros = marvel_heros.concat(dc_heros)//concat return new array
console.log(allHeros)

//spread operator - we prefer this instead of concat
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//flat - returns new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity)// we pass depth as parameter in flat
console.log(real_another_array)


console.log(Array.isArray("Ambika"))// false
console.log(Array.from("Ambika"))//['A','m','b','i','k','a']
console.log(Array.from({name:"Ambika"}))// it gives empty array =[] beacuse here we have to specify what we want key array or value array of an object

let score1 = 100;
let score2 = 200;
let score3 = 300;
//of -> returns a new array from a set of elements
console.log(Array.of(score1,score2,score3));// [100,200,300]


// read more about Array.isArray,from,of