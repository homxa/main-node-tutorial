var events = require('events');
var eventEmitter = new events.EventEmitter();

// to lestent to the event 
eventEmitter.on('my_event', (name) => {
  console.log(`data received successfully.${name}`);
});


//emit create and  do the event
eventEmitter.emit('my_event','hamza');
