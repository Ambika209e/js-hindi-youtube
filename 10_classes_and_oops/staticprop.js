//static properties
class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }
// sometimes hm is methods ka access us object ko nhi dena chahte h
// jo is class se instance hua h to uske liye hm static keyword ka use krte h
// static us method ya property ko access hone se rok deta h
    static createId(){
        return `123`
    }
}

const Ambika = new User("Ambika")
// console.log(Ambika.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone", "i@phone.com");
iPhone.logMe();
console.log(iPhone.createId());// it gives error because createId is static
// so ye child ko bhi access nhi krne deta when we use static

