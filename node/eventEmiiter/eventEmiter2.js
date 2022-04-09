const EventEmitter = require('events');
const { start } = require('repl');

const eventEmitter = new EventEmitter()
eventEmitter.on('start', number=>{
    console.log(`start ${number}`)
})
//you can apss additional arguments to the handler using emit
eventEmitter.emit('start',26);