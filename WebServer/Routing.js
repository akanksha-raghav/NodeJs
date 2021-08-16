const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    if(request.url == "/"){
    response.end('Hello Everyone!');
    }else if(request.url == "/index"){
    response.end('Hello this is index page!');
    }else if(request.url == "/login"){
    response.end('Hello this is login page!');
    }else if(request.url == "/signup"){
    response.end('Hello this is signup page!');
    }else{
    response.writeHead(404,{'Content-Type':'text/html'});
    response.end('<h1>404 error</h1>');
    }
});

server.listen(3000,"127.0.0.1",()=>{
    console.log("Listening");
}); //port number
console.log('Server running at http://127.0.0.1:3000/');
