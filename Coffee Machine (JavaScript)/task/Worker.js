const input = require("sync-input");

class Worker {
    constructor(coffeeMachine) {
        this.coffeeMachine = coffeeMachine;
    }

    fill() {
        console.log("Write how many ml of water do you want to add: ");
        const water = Number.parseInt(input());
        console.log("Write how many ml of milk do you want to add: ");
        const milk = Number.parseInt(input());
        console.log("Write how many grams of coffee beans do you want to add: ");
        const coffeeBeans = Number.parseInt(input());
        console.log("Write how many disposable cups of coffee do you want to add: ");
        const cups = Number.parseInt(input());

        this.coffeeMachine.fill({water, milk, coffeeBeans, cups});
    }

    buy() {
        console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ");
        const coffeeTypeInput = input();
        const coffeeType = {1: 'espresso', 2: 'latte', 3: 'cappuccino'}[coffeeTypeInput];

        if (!coffeeType) {
            console.log('Invalid selection!');
            return;
        }

        console.log(this.coffeeMachine.buy(coffeeType));
    }

    take() {
        console.log(`I gave you $${this.coffeeMachine.take()}`);
    }

    status() {
        console.log(this.coffeeMachine.status());
    }
}

module.exports = Worker;