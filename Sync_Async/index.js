// REPL 
// 1. js expression
// 2. use variables
// 3. Multi-line Code 
// 4. use (_) to get the last result 
// 5. we can use editor mode

//Core modules
const fs = require('fs');
// create a new file
fs.writeFileSync('test.txt', 'Hello World');
// data override ho jata h agr dubara chlaoge
// append
fs.appendFileSync('test.txt', '\nI am appended');

// read a file 
//file encoding
fs.readFileSync('test.txt', 'utf8');
// read a file and return a buffer
//nodejs includes an additional data type called Buffer.
// Buffer is mainly used for binary data.

const buf_data = fs.readFileSync('test.txt');
console.log(buf_data);
const org_data = buf_data.toString();
console.log(org_data);

// to rename a file
fs.renameSync('test.txt', 'read.txt');
 
// to delete a file
fs.unlinkSync('read.txt');
 // remove directory
fs.rmdirSync('test');