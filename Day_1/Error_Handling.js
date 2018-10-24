try {
    var http = require('http');
    var dt = require('./Export_Time');
    
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Time: " + dt.myDateTime());
        res.end();
    }).listen(8080);
    
    var msg = require("./Msg_Module");
    console.log(msg);
} catch (err) {
    console.error('There was an error calling the function!', err);
    return;
}