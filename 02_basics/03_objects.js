// we can declare objects in two ways -Literal and constructor
// singleton-when we create objecs by constructor tb singleton object banta h,Literals se singleton object nhi banta h - object.create()
//1. Singleton - object.create()
//2. object literals


const mySym = Symbol("key1")

const jsUser = {// keys track as string behind the scene "name"
    name:"Ambika",
    "fullName":"Ambika Vishnoi",
    age:20,
    [mySym]:"myKey1",
    location:"Indore",
    email:"ambika@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["monday","tuesday","wednesday"]
}
// how to access objects
//1st way
console.log(jsUser.email);
//2nd way- why we should know the 2nd way to access the object because if key is defining as string we cant access onject by .(dot)
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);
console.log(jsUser[mySym])

//interview question - ek symbol lo aur use object ki keys me add kro print kr ke dikha do
// we use symbol in object as other key:value pair and it print the value of symbol but it does not treat it as symbol,so for treating as symbol we use square bracket, and also access by square bracket without string comma

//how to change objects values
jsUser.email = "ambika@google.com"

// if you want no one can change the value of object then hme use freeze krna hoga
// Object.freeze(jsUser)

// how to add a function in object
jsUser.greeting = function(){
    console.log("Hello JS User")
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)// for refering same object we use this
}

console.log(jsUser.greeting);//function (anonymous)
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

