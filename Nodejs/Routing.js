const http = require("http");
const createServer = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("<h1>Aeropuerto</h1>")
    } else if(req.url === '/aviones') {
        res.end("<h1>Aviones</h1>") //airplane
    } else if(req.url === '/vuelos') {
        res.end("<h1>Vuelos</h1>") //flight
    } else {
        res.writeHead(404);
        res.end("<h1>404 Not Found</h1>")
    }
});
createServer.listen(8080, () => console.log("Server running on port 8080"));
