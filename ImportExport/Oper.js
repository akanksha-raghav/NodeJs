const add = (a,b) =>{
    return a+b;
}

const sub = (a,b) =>{
    return a-b;
}
const name = "tutu";
// module.exports = add;
module.exports.add = add ;
module.exports.sub = sub ;

//obeject destructuring
module.exports = { add,sub,name} ;