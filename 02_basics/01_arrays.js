const myArr = [1,2,3,4,true,"Ambika"]// in js we can store different type of element in an array,javascript arrays are resizable
//javascript array-copy operation create shallow copy
//(A shallow copy of an object is a copy whose properties share the same references)
//deep copy do not share the same references

// declare array in different way
const myArr2 = new Array(1,2,3,4)
console.log(myArr2[0])


//----Array Methods-----
myArr2.push(5)
myArr2.push(6)//it add element on the last of array
console.log(myArr2)
myArr2.pop()//it does not take any argument it just remove the last element from array

myArr2.unshift(9)//it add elements on the start of array (but by this operation we have to shift the all elements that is its drawback)
myArr2.shift()//it remove elements from the starting of array
console.log(myArr2.includes(9));//it returns true/false 
console.log(myArr2.indexOf(3))// it returns the index of the element

const newArr = myArr2.join() //adds all elements of an array into a string
console.log(myArr2)// [1,2,3,4,5]
console.log(newArr)// 1,2,3,4,5 -> String


//slice, splice
console.log("A ",myArr2)
const myn1 = myArr2.slice(1,3);//it returns copy of array between given range and last is excluded

console.log(myn1);
console.log("B ",myArr2)// B [1,2,3,4,5]

// myArr2 = [1,2,3,4,5]
const myn2 = myArr2.splice(1,3);// splice manipulate original array it also include last index which means it return [2,3,4]
console.log("C ",myArr2)// c [1, 5]
console.log(myn2)//[2, 3, 4]