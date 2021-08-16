const fs = require('fs');
const biodata = {
    name : "Akanksha",
    age : "21",
    channel: "JS love",
};

 // JSON

// const jsonData = JSON.stringify(biodata);
// console.log(jsonData);
// console.log(jsonData.length);
// console.log(jsonData.name);

// JSON to obj
// const data = JSON.parse(jsonData);
// console.log(data);
// console.log(data.name);

const jsonData = JSON.stringify(biodata);
fs.writeFile('json1.json', jsonData, (err) => {
    console.log("Done");
});
fs.readFile('./json1.json', "utf-8",(err, data) => {
    console.log(data);
    const oriData = JSON.parse(data);
    console.log(oriData);
});