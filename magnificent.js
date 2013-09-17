var express     = require('express')
var http        = require('http')
var gzippo        = require('gzippo')

var app = express();
// New call to compress content
app.use(express.compress());
// app.use(express.static(__dirname + '/public'));
app.use(gzippo.staticGzip(__dirname + '/public', { maxAge: 86400000 }));

http.createServer(app).listen(process.env.PORT || 8789, function(){

});