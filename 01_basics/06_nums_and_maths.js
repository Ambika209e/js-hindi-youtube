const score = 500;// here js automatically detect it is a number
console.log(score);//500

const balance = new Number(500);//[Number : 500]
// but if we want strictly want that it is be a number then we use new keyword
console.log(balance);
//because Number is an object so it has multiple prototype like toString and more
console.log(balance.toString().length);
console.log(balance.toFixed(2));//500.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));//23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//but this print 10,00,000(Indian format)
//by default it prints 1,000,000(comma separated value)

//--------------------------Maths----------------------------------

// in js Math library attached by default
//Math library is an object which has multiple properties and functions

console.log(Math.abs(-3))//3 it return positive value of any number
console.log(Math.round(3.55))//3 if convert value normally 
console.log(Math.ceil(4.3))//5(upper value)
console.log(Math.floor(4.9))//4(Lower value)
console.log(Math.min(2,3,4,1));
console.log(Math.max(2,10,3,4))
console.log(Math.random())// it gives values between 1 - 9(0.1,0.2...including decimal)
console.log((Math.random()*10)+1)//we multiply 10 for shifting values in left 
// 0.1235454 = 1.235454
// may be sometimes value is 0.1 in this case Math.floor gives us 0 so avoiding this case we add 1
console.log(Math.floor(Math.random()*10)+1);


// but sometime we have to define min and max as well in this case we define Math.random and and instead of multiplying by 10 we did(max-min+1) plus 1 is for avoiding 0 case and for defining where to minimum start we add min
const min = 10
const max = 20
Math.random() * (max-min+1)
console.log(Math.floor(Math.random()*(max-min+1))+min)