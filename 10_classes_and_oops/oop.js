
const user = {
    username : "Ambika",
    loginCount : 6,
    signedIn : true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);// if we dont use this it says username is 
        // not defined because use nhi pta username exist krta h so current context
        // k liye hm this keyword ka use krte h

        console.log(this)// it gives all current context
/* 
{
  username: 'Ambika',
  loginCount: 6,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
*/
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)//in global context it gives empty object {}


//constructor function

// new keyword ek constructor function h,ye allow krta h ki ek hi object literal se
// multiple instance bna sko    

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this;
}
// if we dont use new keyword and make another object it overwrite the previous objects vlaue
const userOne = new User("Monika",12,true);
const userTwo = new User("Shivani",15,true);
console.log(userOne);
console.log(userTwo);
//constructor function hr baar ek nya instance deta h

/*
new => jese hi hm new keyword use krenge to sbse phle ek empty object create 
hota h, jise instance bola jata h
1.empty object create hota h
2.constructor function call hota h new keyword ke kaaran,ye sare arguments ko pack krta h
or hme de deta h
3.this keyword me sare arguments inject ho jate h
4.then hme function k ander mil jate h
*/