// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best number")
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    // for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + ' = '+ i*j)
        
//     }
// }

const myArray = ["Ambika","Astha","ayushi"];
// console.log(myArray.length)
for (let i = 0; i < myArray.length; i++){
    const element = myArray[i];
//     console.log(element)
}
// in js if we access the element out of the array size then it prints undefined instead of aray out of bound exception

// break and continue

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("detected 5");
        // break; // for break the control flow
        continue;// for skip iteration
    }
    console.log(`value of i is ${i}`);
}