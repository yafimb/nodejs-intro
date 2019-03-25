const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url,req.method, req.headers);
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<h1>Hello from nodejs</h1>');
    res.write(`<h2>Route ${req.url}</h2>`);
    res.write('</html>');
    res.end();
    //process.exit();
    
});

server.listen(3000);