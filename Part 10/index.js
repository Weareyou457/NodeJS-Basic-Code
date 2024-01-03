// ---------------13-------------


//Problem PREVIOUS


// HOW TO HANDLE IT (PROMISES) //resolve / Reject 

let a = 10;
let b = 0;


//prmise me reolve or reject rakhenge 

let waitingdata = new Promise((resolve,Reject)=>{

    setTimeout(() => {
        resolve(20);
    }, 2000);
    

})

// .then krke result le lenge 
//resolve hokr milega to vo data me ayega arrow function me 


waitingdata.then((data)=>{
    console.log(a+data);
})






