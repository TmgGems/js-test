const http = require("http");// package or module name in parenthesis
const date = require("./myfirstmodule");

 http.createServer((req,res) => {
    res.writeHead(200,{'Content-type':'text/html'});
    res.end("Hello Boii" +  " Current time is : " + date.myDateTime());
 })
 .listen(8080);

 console.log('App Runing on port 8080');