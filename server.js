const http = require('http')


const server = http.createServer((req, res) => {
    // contents
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h2>Hello World!</h1>');
});


const port = 8080;
server.listen(port);
console.log('Server listen on port ' + port)



