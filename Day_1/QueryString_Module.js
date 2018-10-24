//  parse
var querystring1 = require('querystring');
var q1 = querystring1.parse('year=2018&month=Oct');
console.log(q1.month);

//  stringify
var querystring2 = require('querystring');  
const q2 = querystring2.stringify({name:'Mark',company:'Facebook'});  
console.log(q2);  

//  escape()
//  unescape()