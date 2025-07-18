let myName = "Ambika"
let myName2 = "Ambika    ";

console.log(myName.length);// it gives 6
/* the task is it gives us 6 with the spaces so me chahti hu ki .length
 ki tarah hi ek method ho trueLength we can do this by trim but we want a 
 method truelength jo hme console log de pura or pura word likh kr de ki truelength of string is or 
 uske baad proper value de and last ke spaces ko nikal ke de
 or hm chahte h ki ye saara kaam truelength se hi ho mujhe 10 functions call krne hi nhi h
 so hm ye functionality bake in kr skte h hr string k sath */

 let myHeros = ["thor","spidrman"]

 let heroPower = {
    thor:"hammer",
    spiderman : "spi"
 }

 /* Arrays-------------------
   functions-----------------object
   strings------------------- 
 */
// here we add the functionality in object and arrays,function and strings are automatically have this functionality
// because at the end all these are objects 
 Object.prototype.Ambika = function(){
    console.log(`Ambika is present in all objects`)
 }
//  heroPower.Ambika();
 myHeros.Ambika();

 /*ab ydi ye power me array ko du to kya ye power by default object ke pass jati h
*/

Array.prototype.heyAmbika = function(){
    console.log(`Ambika says hello`);
}

myHeros.heyAmbika();//Array ke pass power h pr object ke pass nhi
// heroPower.heyAmbika(); // it has not the access of heyAmbika 


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fulltime : true,
    __Proto__:TeachingSupport
}

Teacher.__Proto__ = User;// this is the old approach

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Ambika".trueLength()
"iceTea".trueLength()