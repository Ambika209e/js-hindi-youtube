// array loops -> for in,for each,for of

// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps -> map holds key-value pairs,a key in the map may only occur once.
// keys are unique in the map collection

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":", value);
}

// object

const myObj = {
    'fruit1': 'Apple',
    'fruit2': 'Banana',
    'fruit3': 'chiku'
}

// for (const [key,value] of myObj) {
//      console.log(key, ":", value);// myObj is not iterablek by for of loop
// }



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})
