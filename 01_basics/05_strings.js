const firstName = "Ambika";
const lastName = "Vishnoi";
//avoid using like this
console.log(firstName + lastName);

// we usually use backticks (string interpolation)
console.log(`Hello my name is ${firstName} my surname is ${lastName}`);

// we also declare string like this
const name = new String("Ambika");
console.log(name[0]);
console.log(name.__proto__);


console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(3));
console.log(name.indexOf('b'));

const newString = name.substring(0,3)
console.log(newString);
//Ambika
const anotherString = name.slice(-3,7)// we take negative index
console.log(anotherString)

const newStringOne = "    ambika     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://ambika.com/ambika%20bishnoi"
console.log(url.replace('%20',"-"))
console.log(url.includes('ambika'))
console.log(url.split('-'))