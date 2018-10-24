var fs = require('fs');
var dir = './Directory_making';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}