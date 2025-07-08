//reduce
const myNum = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

// by arrow function
const mySum = myNum.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
console.log(mySum)

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "mobile dev Course",
        price: 5999
    },
    {
        itemName: "data science Course",
        price: 12999
    },
]
// add all prices of shoppincart

const totalPrice = shoppingCart.reduce( (accum,item)=>(accum+item.price),0)
console.log(totalPrice)
