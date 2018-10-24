var fs = require('fs');

fs.writeFile('FileWrite.txt', 'Node js', function (err) { 
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
});