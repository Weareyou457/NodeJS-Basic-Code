// --------8-----------------

const http = require('http');


http.createServer((req, resp) => {

    resp.writeHead(200, { 'Content-Type': 'application\json' });  //perameter(status,type content la )

    resp.write(JSON.stringify({
        name: "anil Shidhu",
        email: "anil@shidhu.com"
    }));

    resp.end();

}).listen(5000);



//bhar ki file se data launga 

const http = require('http');
const data = require("./dataapi") //import 

http.createServer((req, resp) => {

    resp.writeHead(200, { 'Content-Type': 'application\json' });  //perameter(status,type content la )

    resp.write(JSON.stringify(data)); 

    resp.end();

}).listen(6000);
