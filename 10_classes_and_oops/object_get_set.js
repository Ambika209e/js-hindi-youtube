// object based syntax for getter and setter
const User = {
     _email: 'a@av.com',// underscore means private property
     _password: 'abc',

     get email(){
        return this._email.toUpperCase();
     },

     set email(value){
        this._email = value
     }
}
// factory function -> object.create
const tea = Object.create(User)
console.log(tea.email) // email islie access hua kyuki object me email() ye ek method nhi 
// ye ek property maanta h

