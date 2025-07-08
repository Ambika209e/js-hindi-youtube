// if
// if(true){
   // executed
// }


// if(2==="2"){
//     console.log("executed");
// }
// // >, <, <=, >=, ==, ===(it strictly check (with datatype)), !=, !==

// const temprature = 40
// if(temprature < 50){
//     console.log("less than 50")
// }else{
// console.log("greater than 50")
// }


// const score = 300
// if( score < 500){
//     let power = "fly";
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)// it give error power is not defined


// shorthand
// const price = 500
// // if(price < 1000) console.log("price: ",price);

// if (price < 500) {
//    console.log("less than 500")
// }else if(price > 1000){
//    console.log("greater than 1000")
// }else if(price > 700){
//    console.log(" greater than 700");
// }else{
//    console.log("greater than 100")
// }

const isLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;
if(isLoggedIn && debitCard && 2=="2"){
     console.log("allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
   console.log("user logged in");
}