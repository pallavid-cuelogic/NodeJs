//  npm install --save async

async = require("async");

var task=[];
 
task.push(function(cb){
setTimeout(function(){console.log("first");
cb(null,"first");
},3000)
 
});
task.push(function(cb){
setTimeout(function(){console.log("second");
cb(null,"second");}
,1000)
 
});
task.push(function(cb){
 
setTimeout(function(){console.log("final");
cb(null,"final");}
,6000)
 
});
 
async.series(task,function(err,data){console.log(data)});
async.parallel(task,function(err,data){console.log(data)});