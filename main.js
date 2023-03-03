// given a number, determine if that number is even
//this is where we have our js functionality. it is seperate from test cases 
function isEven(num) {
  return num % 2 == 0;
}; 

function divide(a, b) {
    return a / b;
}
//module.exports is maintained by node.js (it is native) (its already include in node js)
//module.exports is going to be an object that exports functions when can access anywhere through out or project ie our file structure .
//in this case we are exported the reference to our functon "isEven", so that we can test wihti our lesson test. 
module.exports = {
    isEven,
    divide
}