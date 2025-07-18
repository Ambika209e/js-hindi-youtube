const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// why we cant change the value of PI
// console.log(Math.PI)//3.141592653589793
// Math.PI = 5;
// console.log(Math.PI)//3.141592653589793


// to jese hm PI ki value change nhi kr skte to kya hm kisi variable ki value ese 
// declare kr skte h ki koi use change na kr pae

const chai = {
    name : "ginger chai",
    price : 250,
    isAvailable : true,

    orderChai: function(){
        console.log("chai nhi bni")
    }
}
// console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai, "name"))
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
Object.defineProperty(chai, 'name', {
    // writable : false,
    enumerable : false // jese hi hm ise false krte h to hm iteration nhi kr skte or name 
    // print nhi hoga yha pr
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))
/*
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
    console.log(`${key} : ${value}`)
        
    }
}