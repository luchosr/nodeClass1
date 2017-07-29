let calculadora = require('./modulos.js');
let _=require('underscore');
let resultado = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

console.log(resultado);
console.log(calculadora.suma(3,2));
console.log(calculadora.resta(4,1));
