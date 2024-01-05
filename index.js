const http = require("http");

const hostname = `127.0.0.1`;
const port = 8000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const serverTime = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Kolkata'
    };
    const formattedTime = serverTime.toLocaleString('en-US', options);

    const jsonResponse = { message: 'Hello World', time: formattedTime };
    res.end(JSON.stringify(jsonResponse));
});
server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`));