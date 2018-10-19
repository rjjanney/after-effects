var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('I created this server!');
    res.end();
}
);
server.listen(8080);