const http = require('http');
const url = require('url');
const fs = require('fs');
const server = http.createServer((request, response) => {
    const data = fs.readFileSync(`${__dirname}/userapi.json`,"utf-8");
    const objData = JSON.parse(data);

    if(request.url == "/"){
    response.end('Hello Everyone!');
    }else if(request.url == "/index"){
    response.end('Hello this is index page!');
    }else if(request.url == "/about"){
    response.end('Hello this is about page!');
    }else if(request.url == "/userapi"){
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(objData[2].name);
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
