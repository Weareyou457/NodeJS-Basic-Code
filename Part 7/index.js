// ------------------10--------- CREATE FILE 


//10.1
const fs = require('fs');

//purnana tarika 
// fs.writeFileSync('apple.txt','this is a Apple file')

// for (let i = 0; i < 5; i++) {
//     // fs.writeFileSync("apple"+i+".txt","Simple Text File");
// }





// 10.2

//path ke sath file bnanan ho to 

const path = require('path');  //path chiye koi bhi file ka to import hai 

// const dirPath = path.join(__dirname)
// console.log(dirPath); //current directory ka path ded dega 

const dirPath = path.join(__dirname,'files') //add path me ((currentpath + files))

console.log(dirPath);

// file using Loop 

// for (let i = 0; i < 5; i++) {
     fs.writeFileSync(dirPath+`/apple${i}.txt`,"Simple Text File");    //ye baneyega file path files ke andr
// }






//10.3

//file read karna ho but yaha puri directory me 

// readdir (read karega puri directory ko)

fs.readdir(dirPath,(err,files)=>{
    
    // console.log(files);
    
    files.forEach((item)=>{
        console.log(item);
    })
})
