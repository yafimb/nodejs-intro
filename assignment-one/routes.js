const http  = require('http');
const fs    = require('fs');

const requestHandler = (req, res) => {
    
    const url       = req.url;
    const method    = req.method;

    console.log(url,method);

    if (url === '/') 
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Home</title><head><h1>Home page</h1>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        return res.end();
    }
    else if (url === '/users') 
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><ul><li>Josh</li><li>Mosh</li><li>Kush</li></ul></body><html>');
        return res.end();
    }
    else if (url === '/create-user' && method === 'POST') 
    {
        const body = [];
        
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        
        return req.on('end', () => {
            
            const parsedBody    = Buffer.concat(body).toString();
            const message       = parsedBody.split('=')[1];
            fs.writeFile('create-user.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Assignment</title><head>');
    res.write('<body><h1>Hello from my Node.js Server! ??</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;
