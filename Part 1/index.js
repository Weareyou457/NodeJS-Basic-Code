//--------------2 ka part hai 



// import {x} from './app' //(problem app ki first ka 

//cannot use import use in js but not in node js version because low version pr work kar rha hai 

//ye use hota hai 
const { takeCoverage } = require('v8');

const app = require('./app');

console.log(app.x);
console.log(app.y);
console.log(app.z());

// ------------yaha takeCoverage



// -------------------------1-----------
console.log("like");

var a="10";
var b=20;
console.log(a+b);

//-------------------------1-------------



// --------------------------2---------------

//2.1
if(a===10){
    console.log("Equal match");
}else{
    console.log("NOO");
}

//2.2
for (let i = 0; i < 10; i++) {
   console.log(i);
    
}

//2.3s
const arr=[2,3,4,5,6,7,8,3];

// console.log(arr);


//upr import hai vo bhi part hai 


//UPR KE BAAD KA YAHA SE --2

const result=arr.filter((e)=>{
    // console.log(e);
    // return e===3;
    return e>3;
})

console.log(result);

//----------------------------2--------







//---------------------------3------
// CORE MODULE (har progrmamming langugage me kuch features hote hai phele se forex:- db connection authentication) in bulit freature hota hai 

//fs,buffer,http example of core module


// GLOBAL AND NON GLOBAL




const fs=require('fs') //import karne ka trika 


//use karne se phele import karo 

console.log("code setp by step");

//file create karta hai (name,contain)
fs.writeFileSync("Helllo.txt","code step by step");

console.log("-->",__dirname);  //directory name __dirname 

console.log("-->",__filename) //file name btata hai 


const fss = require('fs').writeFileSync;
fss("xyz.txt","hulla lullu")

