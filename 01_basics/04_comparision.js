// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1);//true but we always compare same datatype
console.log("02">1);//true

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null>=0);//true
//The reason the equality (==) and comparisions(> < >= <=)work differently,
//comparision convert null to a number, treating it as 0,that why null >= 0 is true and null>0 is false

console.log(undefined == 0);//false
console.log(undefined >= 0);//false
console.log(undefined > 0);//false


// === (strict check) it strictly check which means it check values as well as datatypes
console.log("2"==2)//true it only checks values
console.log("2"===2);//false bcz datatype is different here

//--------------------------------------------------------------//

//Stack (Primitive)in stack memory we get copy, 
// Heap(Non-Primitive)in Heap memory we get reference









