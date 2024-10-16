// Create a Car class that has a make, model, and an Engine class as a property. Use composition to access the engine’s start() and stop() methods.

class Engine {
    start() {
        console.log('Engine has started.');
    }

    stop() {
        console.log('Engine has stopped.');
    }
}

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.engine = new Engine();
    }

    startCar() {
        console.log(`Starting the ${this.make} ${this.model}.`);
        this.engine.start();
    }

    stopCar() {
        console.log(`Stopping the ${this.make} ${this.model}.`);
        this.engine.stop();
    }
}

const car1 = new Car('Toyota', 'Corolla');
car1.startCar(); // "Starting the Toyota Corolla. Engine has started."
car1.stopCar();  // "Stopping the Toyota Corolla. Engine has stopped."
