// const coding = ["js","ruby","java","pyhton","cpp"]

// // when we want return somthing in forEach loop but 
// // it dont return anything 
// // in those cases when we want forEach return something then what we do
// const values = coding.forEach( (item) => {
//     //   console.log(item);
//     return item;//undefined
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num>4 )
console.log(newNums);

// jb bhi hm filters use krte h, filter k andar hme ek callback function 
// milega, jisme hr value ko each access kiya jaega uske baad hme deni 
// hoti h condition jo us condition ko satisfy krenge vo values return hogi

// another way when we use curly braces
const myNum = myNums.filter( (num)=> {
     return num>4// if we use scope({}) we have to use the return keyword here
})
console.log(myNum);


// if we want same using forEach 

const newNo = []
 
myNums.forEach( (num) =>{
    if(num>4){
        newNo.push(num)
    }
})
console.log(newNo);// 5,6,7,8,9,10

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === "History")
  userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

  console.log(userBooks);


