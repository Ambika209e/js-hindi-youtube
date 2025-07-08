const useremail = "ambika@gmail.com"

if(useremail){
    console.log("Got User Email");
}else{
    console.log("Don't have user email");
}
// how it execute when we dont do any comparision we just assume that string is truthy value

// falsy Value -> false, 0, -0, "", BigInt 0n, null, undefined, Nan(Not a number) except these values everything consider in truthy values

// truthy values -> "0", "false", " ", [], {}, function(){}


const myarr = [];
if(myarr.length === 0){
    console.log("Empty array");
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
}

// false == 0 //true
// false == '' //true
// 0 == '' //true


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1);//5

// val1 = null ?? 10
// console.log(val1);//10

val1 = undefined ?? 15
console.log(val1)//15

val1 = null ?? 10 ?? 20
console.log(val1);//10 first value


// null coalescing operator null value ka safety check krta h kyunki null k bases
// pr ho skta h koi program run na kre aage jake koi problem aa jaye
// ydi isme value null h to null assign kr do nhi to 10 print kr do but at the place
// of 10 we use functions jo database call kr rha h jo koi value return kr rha h
// nhi to null assign kr do


// ternary Operator (if-else likhne ka alternative)

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

