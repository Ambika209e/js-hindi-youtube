//for in loop -> objects pr iteration k liye 
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const arr = ['js','cpp','java','python'];
for (const key in arr) {
    console.log(arr[key]);
    
}


// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('FR',"France")

// for (const key in map) {
//     console.log(key)// print nothing bcz maps are not iterable
// }