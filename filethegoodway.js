const fs = require('fs');

fs.readFile('archivo.txt','utf8', function(err,data){
    if(err){
        console.log(err);
        return;
    } else{
        console.log(data);
    }
});