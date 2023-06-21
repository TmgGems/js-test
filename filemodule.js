const fs = require('fs');

const rs = fs.createReadStream('./file.txt');

rs.on('open',() => {
    console.log("The file is open . ");
});

//to read the contents of file

rs.on('data',(data) => {
    console.log(data.toString());
})

