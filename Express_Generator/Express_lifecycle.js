var app = express();

var lifecycle = require('express-lifecycle').init(app);

lifecycle.before.use(function(req, res, next) {
    console.log("before use functioning");
});

lifecycle.main.use(function(req, res, next) {
    console.log("main use functioning");
    
});

lifecycle.after.use(function(req, res, next) {
    console.log("after use functioning");
});
