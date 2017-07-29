let numero = 10;
setTimeout(function(){
    numero +=10;
}, 5000);

console.log(numero);

let miApi = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(10);
    }, 1000);
});

fetch.then(function(data){
    numero = data;
});

console.log(numero);