// for each loop

const coding = ["js","ruby","java","pyhton","cpp"]

// forEach array ki ek property hoti h jise hm . se use kr skte h,
// forEach function ek callback function leta h
// callback function ka koi name nhi hota
// or paranthesis me hm kuch bhi parameter ka naam le skte h jiske through hm value
// ko acces kr skte h

// coding.forEach(function (item){
//     console.log(item);
// })

//forEach me callback function me hm arrow function bhi use kr skte h
// using arrow function :
// coding.forEach((item)=>{
//     console.log(item)
// })


// another way
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)


coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})