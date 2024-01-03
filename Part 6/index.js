// -------------------------9--------

//input get command line 
//input kese le using command line

console.log(process.argv);  //argument vetor

// cmd --> node index.js hello hi

console.log(process.argv[2]);



//9.2
const fs= require('fs');


const input1 = process.argv;

fs.writeFileSync(input1[2],input1[3])

// node "c:\Users\dell\Desktop\NODE\Part 6\index.js" apple.txt 'this is a fruit'


//9.3
const input2 = process.argv;

if(input2[2]=="add"){
fs.writeFileSync(input2[3],input2[4])



//node "c:\Users\dell\Desktop\NODE\Part 6\index.js" add orange "this is a orange"


}
else if(input2[2]=="remove"){
    fs.unlinkSync(input2[3])  //remove kar dega file ko


//node "c:\Users\dell\Desktop\NODE\Part 6\index.js" remove orange

}
else{
    console.log("invalid Output");
}


// invlaid input 

