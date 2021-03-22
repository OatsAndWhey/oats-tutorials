const EventEmitter = require('events')

// Create emitter class
class MyEmitter extends EventEmitter {}

// Initialize object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'))

// Init event
myEmitter.emit('event')