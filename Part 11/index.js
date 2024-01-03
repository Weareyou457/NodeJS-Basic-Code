// ---------------14-------------

// 1. call stack
// 2. node aapi 
// 3. callback queue

// how work node js


// 1|-->call stack

// pure function ki regestrie karta hai konsa function kab run hoga vo sab call stack yaad rakhta hai 



//  2|-->node api 

// (((settime out)))) take time wali chize 
// node se nhi (core) se aati hai na (c,c++) ((API)) do proramming ke bich me interface hota hai 



//  3|-->callback queue

// why node direct nodeAPI->call stack nhi jata 

// kyuki 

// node api ko call stack khali chiye hota hai 

// osec wala callback queue me wait karta hai 
// 2 sec wala second api aayi 



console.log("Starting UP");

setTimeout(() => {
    console.log("2 sec Log");
},2000);

setTimeout(() => {
    console.log("0 sec Log");
},0);

console.log("finidhing UP");