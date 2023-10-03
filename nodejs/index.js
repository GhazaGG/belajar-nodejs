const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = (name)=> {
  console.log(`kopi atas nama ${name} sudah siap`)
}


myEventEmitter.on('coffee-order', makeCoffee)
myEventEmitter.emit('coffe-order', {name : 'Ghaza'})
