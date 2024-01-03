//-----------11 CRUD with File system

//11.1

//MAKE FILE
const fs = require('fs');
// fs.writeFileSync("apple.txt","hello") nonono path me banani hai 

const path = require('path');

const dirPath = path.join(__dirname, "CRUD");


const filePath = `${dirPath}/apple.txt`;


fs.writeFileSync(filePath,"this is a apple ")


//11.2

//READ FILE

fs.readFile(filePath,'utf-8',(err,item)=>{
        console.log(item);
})

//11.3

//UPDATE FILE  

fs.appendFile(filePath, "and ye us file ke aage added hojyega", (err) => {
    if (!err) {
        console.log("FIle Updated Jakr Dekh Lo");
    }
})



//11.4

//RENAME FILE

fs.rename(filePath,`${dirPath}/File.txt`,(err)=>{
    if(!err){
        console.log("Susscessfully Rename");
    }
})




//11.5

//DELETE FILE


fs.unlinkSync(`${dirPath}/File.txt`);
