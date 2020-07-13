const http = require('http');
const html = require('fs').readFileSync('views/index.html');


const server = http.createServer((req, res) => {

    // contents
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.end(html);

});


const port = 8080;
server.listen(port);
console.log('Server listen on port ' + port)



