function SetUsername(username){
    //complex DB Calls
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@google.com", "12345");
console.log(chai);

/*
call keyword usecase =>hmare pass ek call stack hota h jha sb kuch execute hota h
vha hmare pass ek global execution context hota h jo hmesha rhta h fir ek function aya
to uska context aa jata h, fir ek function aya to uska context aa jata h, jese hi function 
hta to context bhi ht jata h to jb bhi ek function ata h to vo apna vaps se ek
execution context lekr aata h, memory leke ata h, call stack leke ata h 
this- current execution context btata h but ydi function k andar vaps se function ate h
function(){
 callMe() -> yha ise kon btayega ki this keyword kisko refer krega ese case me this 
 global execution context ko refer krta h 

}
 when we just call the function in another function so in above example
 it gives us only email and password it does not guve us username because ye call hi nhi hua 
 h so explicitly function ko call krne ke liye hmare pass hota h call keyword, so reference hold krne k liye hmare pass hota h call method
 yha function call ho rha h but function call hone ke bad uska execution context ht ja rha h
 so in this scenario we use call and in call we pass this so it tell that ki ye us function 
 ke current context ko refer kr rha h jha vh call ho rha h, hr function ka apna ek this hota h but execution context htne pr vo gayab ho jaega so hm yha apna this denge

 call hmara current execution context kisi or function ko pass kr deta h
*/