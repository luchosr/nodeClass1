const fs = require('fs');

console.log('antes de abrir el archivo');

const file = fs.readFileSync('archivo.txt');

console.log('despues de abrir el archivo');

console.log(file.toString());

console.log('ya mostre el archivo');