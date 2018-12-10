var express = require('express');
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', function (req, res) {
  var data = {
    "Fruits": [
      "apple",
      "orange"    ]
  };
  res.json(data);
});
app.get('/test', function(req, res){
  var file = __dirname + '/ZipFile.zip';
  res.download(file); // Set disposition and send it.
});
