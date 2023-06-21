const http = require("http");

 http.createServer((req,res) => {
    res.writeHead(200,{'Content-type':'text/html'});
    res.end("Hello World");
 }).listen(8080);

 console.log('App Runing on port 8080');