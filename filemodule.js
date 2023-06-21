const fs = require('fs');

const rs = fs.createReadStream('./file.txt');

rs.on('open',function(){
    console.log("The file is open . ");
});

