const EVENT_EMITTER = require('events');

class MyEmitter extends EVENT_EMITTER{};

let e = new MyEmitter();

e.on('verde', function(){
    console.log('el semaforo esta en verde');
});

e.on('rojo', function(){
    console.log('el semaforo esta en rojo');
});


e.emit('verde');
setTimeout(function(){
    e.emit('rojo');
},2000);