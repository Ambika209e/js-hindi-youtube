// Immediately invoked Function Expression (IIFE) -> jo function immediately execute ho jaaye

// jese hi aapne function likha use turant execute krwana h => but why we need these functions jo immediately execute ho jaye , kyi bar hm ek file likhte h jisme sirf database connection h or hm chahte h hmari application jese hi start ho vese hi us file ke andar hmara database ka connection start ho jaye, or kyi baar global scope me kyi variable declare hote h, or kyi baar ho skta h hm us function k andar kuch likh rhe h, hm nhi chahte us function k andar vo global variable kuch problem kre kyunki kyi baar hm function me jo declare kr rhe h vo global scope se pollute ho jata h
//1 reason => global scope se pollution nhi chahiye to hm apne ek scope bna lete h + hm chahte h vo immediately execute ho jaaye

(function chai(){ // it is named iife
    console.log(`DB CONNECTED`);
})();
// for end the execution we have to use semicolon

((name) =>{ // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
})("Ambika");

// so for immediately run a function we wrap up the entire function inparenthesis and then call by () with semicolon (end of execution)

