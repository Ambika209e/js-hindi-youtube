// arrow function -> this keyword -> objects
// this keyword current context ke bare me btata h

const user = {
    username : "Ambika",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);// if we want to refer username we dont  directly use username, we can but we dont, when we want to refer current context we use this keyword , current context means first curly braces to last curly braces
        console.log(this)// it prints whole object data bcz it points to current context
    }
} 
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this) // it print empty object {}

// it print empty object bcz we run it in node environment
// if we run this same line in browser it gives us window objec, bcz in js window object is a global object

// pahle javascript ko execute krne ka ek hi tarika tha browser ke andar jo engine js ko execute krta tha vo sirf browser k andar paya jata tha 
// but hmne us engine ko extract kr liya jise hmne alg alg name diye like node,deno...so now we have standalone engine


// function chai(){
//     console.log(this)
//     let username = "amb";
//     console.log(this.username);//undefined
    
// }
// chai()// jb kisi function k andar hm this ko print krte h node environment k andar to hmare pass bhot sari values aati h
// this abhi object k liye hi kam kr rha h functions k liye nhi

const chaiorcoffee = function(num){
    return num + 2
}// we convert this to in arrow function
 
const chai = () => {
     console.log(this)//empty object
}


// arrow function
//1 way
// const addTwo = (num1,num2) =>{ // when we use curly braces we have to write return keyword
//       return num1+num2;
// }
// console.log(addTwo(5,5))

//2nd way (implicit return)
// const addTwo = (num1,num2) => num1+num2;// or (num1,num2)we can also wrap them in parenthesis
// if you want to return an object
const addTwo = () => ({username:"Ambika"})

console.log(addTwo());
