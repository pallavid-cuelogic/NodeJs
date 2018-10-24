var fs = require('fs');

fs.appendFile('FileWrite.txt', ' Append file extension', function (err) { 
    if (err)
        console.log(err);
    else
        console.log('Append operation complete.');
});