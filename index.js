const http = require("http");

const hostname = `127.0.0.1`;
const port = 8000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const jsonResponse = { message: 'Hello World' };
    res.end(JSON.stringify(jsonResponse));
});
server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`));