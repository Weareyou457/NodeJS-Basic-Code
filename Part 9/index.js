//-----------12---------------

// ASYNCHROUNS AND SYNCHROUNS 

// 12.1 SYNCHROUNS
console.log("START exe ...");

console.log("Logic exe ...");

console.log("END exe ...");



// 12.2 ASYNCHROUNS

console.log("START exe ...");

setTimeout(() => {
    console.log("Logic exe ...");
}, 2000);

console.log("END exe ...");


//12.3 ASYNCHROUNS Drawback hai jo promise ne dur kiya 

let a = 10;
let b = 0;


setTimeout(() => {
    b=20; //update let hoga
}, 2000);
//isko handle karna padega

console.log(a+b); //output 10

// isko handle karna ho to promise ya callback kardo