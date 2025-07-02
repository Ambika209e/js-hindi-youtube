// datatypes catagorisation is based o how they store in memory and how we acces them 
// so in js we categorized datatypes in two category = Primitive and Non-Primitive(also called reference type)

// Primitive : primitive types call by value(which means when we copy these datatypes hme original data ka reference nhi diya jata memory ka hme copy kr k diya jata h, or jo bhi hm changes krte h vo copy me changes hote h)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
// javascript is dynamically typed language which means we dont need to specify the datatype of variable.

const score = 100;
const scoreValue = 122.22
const isLoggesIn = false
const outsideTemp = null;
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);//false
const bigNumber = 2233556567768876n


// Reference (Non-Primitive)Memory me inka reference hme allocate kiya jata h
//Array, Objects, Functions

const heros = ["shaktiman","doga","naagraj"];
let myObj = {
    name:"Ambika",
    age:20
}
//in js we can store the function in variable

const myfunction = function(){
    console.log("hello Ambika");
    
}

console.log(typeof outsideTemp);//object
//all reference type datatypes--typeof return object
