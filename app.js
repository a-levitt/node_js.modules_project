const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Welcome to NodeJS');
    res.end();
})

server.listen(5000);

