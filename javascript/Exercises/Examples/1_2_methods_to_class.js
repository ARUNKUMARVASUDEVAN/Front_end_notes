//Add a method greet() to the Person class that logs a greeting message to the console.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('John', 30);
person1.greet(); // "Hello, my name is John and I am 30 years old."
