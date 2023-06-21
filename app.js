const http = require("http");// package or module name in parenthesis
const date = require("./myfirstmodule");
const uc = require("upper-case");

 http.createServer((req,res) => {
    res.writeHead(200,{'Content-type':'text/html'});
    const message =uc.upperCase("Hello World ! ");
    res.end(message +  " Current time is : " + date.myDateTime());
 })
 .listen(8080);

 console.log('App Runing on port 8080');

 ///