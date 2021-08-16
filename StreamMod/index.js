// Reading your stream
// Create a readable stream from a file
// Handle stream events -> Data, end and error

const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    // fs.readFile('./index.txt', (err, data) => {
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // });

    const rstream = fs.createReadStream('./index.txt');
    rstream.on('data', (data) => {
        res.write(data);
    });
    rstream.on('end', () => {
        res.end();
    });
    rstream.on('error', (err) => {
        console.log(err);
        res.end(err);
    });
});

server.listen(3000,"127.0.0.1");