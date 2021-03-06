var connect = require('connect');
var serveStatic = require('serve-static');
var morgan = require('morgan');
var Firebase = require('firebase');

var port = process.env.PORT;

var app = connect();
app.use(morgan('dev'));
app.use(serveStatic('public'));
app.listen(port);

console.log('Node listening port:', port);
