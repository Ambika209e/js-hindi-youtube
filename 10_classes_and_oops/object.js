function multiplyBy5(num){
    return num*5;
}
// here function acts like an object so function bhi ek object hi
// h javascript me
multiplyBy5.power = 2

console.log(multiplyBy5(5));//it gives 25
console.log(multiplyBy5.power);// it gives 2
console.log(multiplyBy5.prototype);// it gives {}

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
      this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
// here chai and tea both call same function in this case above function couldnt 
// understand ki kiski value increase kre kyuki dono ne hi same function ko
// call kiya h so in this case we have this keyword.so in above function we use .this
// means jisne bhi call kiya h uska value increase kr do this means jis
const chai = new createUser("chai",25)
const tea = createUser("tea",250)

chai.printMe()// it gives error can not read properties of undefined
/*properties inject hui h lekin jb hmne createUser("chai",25) se chai ke andar value transfer kri tb hmne use btaya nhi ki mere pass ye additional properties ayi h ye btane ka sara kaam
new keyword krta h so we use new keyword
 */

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

