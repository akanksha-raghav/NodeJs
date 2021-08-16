const fs  = require("fs");
fs.writeFile("test.txt","Happy Day!",
(err) =>{
    console.log("File is created");
    console.log(err);
});
// in async way we need a call back function.The callback has a argument.
// that tells you whether the file is created or not.
 
// appending to a file
fs.appendFile("test.txt","Happy Day!", () =>{
    console.log("Task Completed");
});

//reading a file
fs.readFile("test.txt","UTF-8", (err,data) =>{
    console.log(data);
    console.log(err);
});

// in sync way the operation given first is completed first and we get the output in serial manner.
// while in async way the operation is completed in parallel manner means the operation is completed in a different thread.
// we get the output according to the order of the operation completed.