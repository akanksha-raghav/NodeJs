// The http.createServer() function creates a new web server.
//It includes request and response parameters.
//The request parameter is a socket. It can be used to read and write data to the client.
//The response parameter is a socket. It can be used to write data to the client.
//The socket is the connection between the server and the client.
//The server can send data to the client and the client can send data to the server.
// If the response from the server is suppossed to be displayed as http response,
// you should include http header with correct content type.

const http = require('http');
const server = http.createServer((request, response) => {
    response.end('Hello Everyone!');

});
server.listen(3000,"127.0.0.1",()=>{
    console.log("Listening");
}); //port number
console.log('Server running at http://127.0.0.1:3000/');
