// it is a global scope
let a = 100;
{
    //it is a block scope
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner: ",a);
    
}

// console.log(a);//a is not defined
// console.log(b);// b is not defined
// console.log(c);// but it prints 30

console.log(a);

// nested scope
function one(){
    const username = "Ambika";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);// website is not defined
    two();
}
one();

//website is not defined error throw bcz it is accessed outside of its scope
// nested scope me child entity parent entity ko access kr pati h

// using if
if(true){
    const username = "Ambika";
    if(username === "Ambika"){
        const website = " Amazon";
        console.log(username + website);
    }
    // console.log(website);// website is not defined error throw
}
// console.log(username);// username is not defined 



//-------------------------------interesting-----------------------------------------
//declaring function in two way 
// in 1st way if i call the function before function declaration it is running and not throwing any error

console.log(addOne(5));
// in 1st way we just declare a function
function addOne(num){
    return num+1;
}

//2nd way - we declare a function as well as hold the function in a variable, we called it hoisting in javascript

console.log(addTwo(5));// can not access addTwo before initialization
const addTwo = function(num){
    return num + 2
}
 
