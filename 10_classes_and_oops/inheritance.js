class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // phle hme call method use krna pdta tha pr ab class
        // functionalities k kaaran nhi krna pdta
        this.email = email
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@teacher.com","123");
chai.logMe();
chai.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai === Teacher);//false
console.log(chai instanceof Teacher);//true
console.log(chai instanceof User);//true

