const os = require("os");
console.log(os.arch());
const fm = os.freemem();
console.log(`${fm/1024/1024/1024}`);
console.log(os.totalmem());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());