import http from 'node:http';

const server = http.createServer((req, res) => {
    if (req.url === '/dipan') {
        res.writeHead(200, 
            { 
                'Content-type': 'application/json' 
            });
            res.end(JSON.stringify({
                message: "Backend is alive",
                status: "success"
            }));
        } else {
            res.writeHead(404);
            res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});