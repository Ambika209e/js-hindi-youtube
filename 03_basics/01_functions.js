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

//when we pass multiple arguement and we have only one parameter how we handle these type of scenario so for this situation, we have a concept of rest operator(...)

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,500))//[200,300,400,500] it returns array

function calculateCartPrice1(val1,val2,...num2){
    return num2;
}
console.log(calculateCartPrice1(100,200,300,400))//[300,400]

//how to pass object in a function

const user = {
    username: "Ambika",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

// we can also directly pass object in function like this
handleObject({
    username:"Monika",
    price:1990
})

// we can also pass arrays in the function like this-
const myNewArray = [200, 400, 100, 600] 
function returnSecondValue(getArray){
 return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
//also pass array like this-
console.log(returnSecondValue([200, 400, 500, 1000]));
