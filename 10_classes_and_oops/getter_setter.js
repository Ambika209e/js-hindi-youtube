/*Bhot sare cases ese hote h jha aap kuch properties ka acess sbko nhi dena 
chahte,ya fir koi lena chahte h access to aap usme kuch customize code krna chahte h
to is trh ke kai scenarios hote h or usi k liye getter and setter aate h
*/
class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }

    // when we use getter we also have to use setter
    get password(){
        return `{this._password}ambika`
    }
    // it gives error bcz constructor and setter bith set the value of password
    // to unme ek race lg jati h ir hme error milti h 
    // maximum call stack size exceeded
    // to yha hm ek nya variable hi bna dete h
    set password(value){
        this._password = value
    }
}
const ambika = new User("A@ambika.com","abc");
console.log(ambika.password)
console.log(ambika.email)