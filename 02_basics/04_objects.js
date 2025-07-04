const tinderUser = new Object()//it return emply object{}, its singleton object
tinderUser.id = "123abc"
tinderUser.name = "Ambika"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email:"ambika@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ambika",
            lastname: "Vishnoi"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

//merge objects
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
// const obj3 = Object.assign({}, obj1, obj2)//we use it rare

// instead of assign we use spread operator most
const obj3 = {...obj1,...obj2}
console.log(obj3);

// jb database se data aayega to array of object me aata h
const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    },
    {
        id:4,
        email:"d@gmail.com"
    }
]
// this is how we access array of objects
users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));// it returns array ['id','name','isLoggedIn']
console.log(Object.values(tinderUser));// it also returns array
console.log(Object.entries(tinderUser));// it returns array of array (key-value)
// [['id' '123abc'],['name','ambika'],['isLoggedIn',false]]

//sometimes you loop through the object and extract a value but sometimes the value does not exist so in this case crashes happen so in this case we ask
console.log(tinderUser.hasOwnProperty('isLoggedIn'));// it return true or false



//---------------------------------------------------
// destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor


// if name is too long so here we can change the name like this
const {courseInstructor: Instructor} = course
console.log(Instructor);

//API Disscussion
// phle api xml format me aathi thi but ab json format me aati h
// this is json
// {
//   "name":"Ambika",
//   "coursename":"js in hind",
//   "price":"free"
// }
