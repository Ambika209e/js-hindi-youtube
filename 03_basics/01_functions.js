function sayMyName(){
    console.log("A");
    console.log("m");
    console.log("b");
    console.log("i");
    console.log("k");
    console.log("a");
}
// sayMyName()

function addTwoNumbers(number1, number2){
    return number1 + number2;
}
const result = addTwoNumbers(3,3);
console.log("Result: ",result);

function loginUserMessage(username = "xyz"){//sometimes we pass default value if we dont pass any argument then default value is used.
    // if(username === undefined){
    //     console.log("Please enter a username")
    //     return;
    // }
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage())// when we dont pass any value it gives undefined
