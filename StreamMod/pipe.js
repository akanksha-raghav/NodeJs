// stream.pipe() , the method is used to pipe the stream to another stream.
// It take a readable stream and connect it to writeable stream.

const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    const rstream = fs.createReadStream('./index.txt');
    rstream.pipe(res);
});
server.listen(3000,"127.0.0.1");