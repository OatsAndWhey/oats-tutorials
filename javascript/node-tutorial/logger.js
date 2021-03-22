const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', {id: uuid.v4(), msg})
    }
}

// module.exports = Logger

const Person = require('./person')
// const Logger = require('./logger')

const ash = new Person('Ash Hirst', 27)
const rob = new Person('Rob Hirst', 28)

ash.greeting()
rob.reply()

const logger = new Logger();

logger.on('message', ({id, msg}) => console.log(`Called Listener: ${msg}`))

logger.log('Hello World!')