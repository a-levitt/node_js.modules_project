const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to NodeJS');
        return;
    }if(req.url === '/about'){
        res.end('This is homepage');
        return;
    }
    res.end ('404 - no such page');
})

server.listen(5000);

