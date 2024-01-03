// ----------------4------------------

//4.1 
const http = require('http');
// basic core module node js me server ki requst or reponse ko handle karta hai 



//4.2

// http.createServer().listen(4500) ;//port 

//arrow function se two perameter REQUEST (form sumbit kara  url parameter diya hai to vo unko node js me acces karta hai ) or RESPONSE (yaha se kuch send karna hoto)
 

http.createServer((req,resp)=>{

    // resp.write("hello alfaiz");
    resp.write("<h1>hello alfaiz</h1>");
    resp.end();   //stop karta hai
}).listen(4500); 




//4.3
//normal function se bnaya server 

// function dataControl(req,resp){
    
//      resp.write("<h1>hello alfaizhello</h1>");
//      resp.end();
// }

http.createServer(dataControl).listen(4500);




//4.4
//arrow function server

const data=(req,resp)=>{
    
    resp.write("<h1>hello</h1>");
    resp.end();
}

http.createServer(data).listen(4500);


