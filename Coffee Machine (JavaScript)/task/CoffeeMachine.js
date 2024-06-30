
class CoffeeMachine {
    constructor() {
        this.water = 400;
        this.milk = 540;
        this.coffeeBeans = 120;
        this.cups = 9;
        this.money = 550;
    }

    fill({water, milk, coffeeBeans, cups}) {
        this.water += water;
        this.milk += milk;
        this.coffeeBeans += coffeeBeans;
        this.cups += cups;
    }

    buy(coffeeType) {
        const coffee = {
            espresso: {water: 250, milk: 0, cups: 1, coffeeBeans: 16, money: 4},
            latte: {water: 350, milk: 75, cups: 1, coffeeBeans: 20, money: 7},
            cappuccino: {water: 200, milk: 100, cups: 1, coffeeBeans: 12, money: 6},
            chocolate: {water: 150, milk: 100, cups: 1, coffeeBeans: 10, money: 8},
        }[coffeeType];

        if (!coffee) {
            return 'Invalid coffee type!';
        }

        if (this.coffeeBeans < coffee.coffeeBeans) {
            return 'Sorry, not enough coffee beans!';
        }
        if (this.water < coffee.water) {
            return 'Sorry, not enough water!';
        }
        if (this.milk < coffee.milk) {
            return 'Sorry, not enough milk!';
        }
        if (this.cups < coffee.cups) {
            return 'Sorry, not enough cups!';
        }

        this.coffeeBeans -= coffee.coffeeBeans;
        this.water -= coffee.water;
        this.milk -= coffee.milk;
        this.cups -= coffee.cups;
        this.money += coffee.money;

        return 'I have enough resources, making you a coffee!';
    }

    take() {
        const money = this.money;
        this.money = 0;
        return money;
    }

    status() {
        return `The coffee machine has:
${this.water} ml of water
${this.milk} ml of milk
${this.coffeeBeans} g of coffee beans
${this.cups} disposable cups
$${this.money} of money`;
    }
}

module.exports = CoffeeMachine;