"use strict"; //treat all js code as newer version

//alert(3+3) // we are using nodejs, not browser
console.log("Ambika Hoon me")

let name = "Ambika" //string
let age = 20 //number
let isLoggrdIn = true //boolean
let x; //undefined
let state = null //null for ex . we store temperature and server can't send the value of temp. so server send 0 but 0 is a temperature so in that scenario we use null.

//Premetive DataTypes : -
// number
// bigint
// string => ""
// boolean => true/false
// null => standalone value (null is representation of an empty value)
// undefined => when you declare a variable but not define 
// symbol => we use it when we learn about react, when we make many components and you have to decide that the component is uniqe.i.e. (used for finding uniqeness)


// object => discuss later

console.log(typeof age);
console.log(typeof "Ambika");
console.log(typeof null) // it gives object
console.log(typeof undefined); //it gives undefined