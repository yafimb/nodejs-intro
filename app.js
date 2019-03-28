const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    if(url === '/')
    {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<h1>Hello from nodejs</h1>');
        res.write(`<h2>Route ${req.url}</h2>`);
        res.write('</html>');
        res.end();    
    }

    console.log(req.url,req.method, req.headers);
    
    //process.exit();
    
});

server.listen(3000);