// const add = require('./Oper');
// console.log(add(1, 2));

const oper = require('./Oper');
console.log(oper);
console.log(oper.add(5,4));
console.log(oper.sub(5,4));

// object destructuring
const { add, sub,name } = require('./Oper');
console.log(add(5,4));
console.log(sub(5,4));
console.log(name);