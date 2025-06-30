let score = 33

console.log(typeof(score)) // it gives number
// but if i take score is as string
let score1 = "33"
console.log(typeof(score1)); // it gives string
// but if i want to convert that string into a number then

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)

// but if user type "33ab" then
let score2 = "33ab"
let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1) // it gives number but how it changes to number
console.log(valueInNumber1) // it give NaN => Not a number
 
// when convert any datatype to number-----
// let score = null => we convert it to a number Number(score) it gives 0
// let score = undefined => if we convert it to a number it gives NaN
// let score = true => if we convert it to a number it gives 1
// let name = "Ambika" => and we convert a string to number that is not possible so it gives NaN

// Boolean
let isLoggedIn = 1;
let numberToBoolean = Boolean(isLoggedIn);
console.log(typeof numberToBoolean) 
// 1=> true, 0=>false
// "" => false
// "hitesh" => true


//string
let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber); // it gives string

//------------------- Operations ------------------------

let value = 5;
let negativeValue = -value;
console.log(negativeValue);

// console.log(2+2);
// console.log(2-1);
// console.log(2*2);
// console.log(6/3);
// console.log(2**2);
// console.log(2%2);

let str1 = "Ambika";
// let str2 = " Vishnoi";
// let str3 = str1+str2;
// console.log(str3);

// console.log("1"+2);//12 if string first then all are convert to string 
// console.log(1+"2");//12
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32 if string last then first conversion applied then string add 

console.log(true);//true
console.log(+true);//1
console.log(+"");//0









