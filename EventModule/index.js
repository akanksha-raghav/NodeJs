// Event Module
// Node.js has a built-in module, called "Events" where you can create-,
// fire-, and listen for -your own events.
// Ex1 - Registering for the event to be fired only one time using once.
// EX2 - create an event emitter instance and register a couple of callbacks
// ex3 - registering for the events with callback parameters.

// emitter object has two features : Emitting name events.
// Registering and unregistering listener functions.

// class
const EventEmitter = require("events");
// object
const event = new EventEmitter();

event.on('sayMyName',()=>{
    console.log("Your Name ia Akanksha Raghav");
});
// multiple callbacks
event.on('sayMyName',()=>{
    console.log("Your Name ia Tanu Raghav");
});

event.on('sayMyName',()=>{
    console.log("Your Name ia Tutu Raghav");
});

event.emit('sayMyName');

event.on('checkPage',(sc,msg)=>{
    console.log(`Status: ${sc}, Message: ${msg}`);
});
event.emit("checkPage", 200, "ok");
