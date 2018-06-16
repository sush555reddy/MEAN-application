// console.log("hello world");

require('./instance');
 var goodbye=require('./talk/goodbye');
 var talk =require('./talk');
 var question=require('./talk/question');

 talk.intro();
 talk.hello(" sushmitha");
 var answer= question.ask("what is meaning of life");
 console.log(answer);
 goodbye();