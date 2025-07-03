let myDate = new Date();
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString())

console.log(typeof myDate)//object

//if i want to declare a specific date
let createdDate = new Date(2023,0,23)//month start from 0 in js
console.log(createdDate.toDateString())// mon jan 23 2023k

let newDate = new Date(2025,2,14,5,3)// 3/14/2025, 5:03:00 AM
console.log(newDate.toLocaleString());

let newDate1 = new Date("2025-01-14")//here month start from 1
console.log(newDate1.toLocaleString()); //

let myTimeStamp = Date.now()
console.log(myTimeStamp)//gives milisecond
console.log(createdDate.getTime())

//convert in seconds
console.log(Math.floor(Date.now()/1000));

// if we want to extract something from date like month or dat then...
let newerDate = new Date();
console.log(newerDate.getDay())
console.log(newerDate.getMonth())
//we can customizw thw format
newerDate.toLocaleString('default',{
    weekday: "long"
})//in this weekday print in long




