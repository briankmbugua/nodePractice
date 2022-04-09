const EventEmitter = require('events')

const eventEmitter = new EventEmitter();

//this objecr exposes on and emit methods and several others

eventEmitter.on('start', () =>{
    console.log('started')
})

eventEmitter.emit('start')
