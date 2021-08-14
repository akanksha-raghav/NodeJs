// API is the acroynm for Application Programming Interface.It is a 
// software intermediary between the client and the server. It allow two 
// apllication to communicate with each other.
// API is like a service which allow us to request a data.

const http = require('http');
const url = require('url');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if(request.url == "/"){
    response.end('Hello Everyone!');
    }else if(request.url == "/index"){
    response.end('Hello this is index page!');
    }else if(request.url == "/about"){
    response.end('Hello this is about page!');
    }else if(request.url == "/userapi"){
        fs.readFile('./userapi.json', 'utf8', (err, data) => {
        console.log(data);
        response.end(data);
        });

    }else if(request.url == "/contact"){
    response.end('Hello this is contact page!');
    }else{
    response.writeHead(404,{'Content-Type':'text/html'});
    response.end('<h1>404 error</h1>');
    }
});

server.listen(3000,"127.0.0.1",()=>{
    console.log("Listening");
}); //port number
console.log('Server running at http://127.0.0.1:3000/');
