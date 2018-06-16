var filename = "index.js";

var hello =function(name){
console.log("hello"+name);

};
var intro = function(){
    console.log(" i am new file");

};

module.exports = {
   hello:hello,
   intro:intro
};