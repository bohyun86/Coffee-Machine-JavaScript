const input = require('sync-input');

const Worker = require('./Worker');
const CoffeeMachine = require('./CoffeeMachine');


const coffeeMachine = new CoffeeMachine();
const worker = new Worker(coffeeMachine);

while (true) {
    console.log("Write action (buy, fill, take, remaining, exit): ");
    const action = input();

    if (action === 'buy') {
        worker.buy();
    } else if (action === 'fill') {
        worker.fill();
    } else if (action === 'take') {
        worker.take();
    } else if (action === 'remaining') {
        worker.status();
    } else if (action === 'exit') {
        break;
    }
}
