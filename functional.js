const datos = require('./userdata_js.js');

/**
 * map, filter, reduce, sort
 **/

 let listadoNombres = datos.map(function(usuario){
     return usuario.name;
 });

 let filtrados = datos.filter(function(usuario){
     return usuario.id > 8;
 });

 let ordenados = datos.sort(function(usuario1,usuario2){
     return usuario1.id-usuario2.id;
 });
//     ordenados.forEach(function(usuario){
//         console.log(usuario.id);
//     })
//  console.log(ordenados);


 let sum = datos.reduce(function(acc,usuario){
    return acc + usuario.id;
 },0);
console.log(sum/datos.length);

//  let average = sum / datos.length;