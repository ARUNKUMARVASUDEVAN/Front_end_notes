//Implement polymorphism by overriding the greet() method in the Student class to include their student ID in the message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentID}.`);
    }
}

const student1 = new Student('Alice', 20, 'S12345');
student1.greet(); // "Hello, my name is Alice, I am 20 years old, and my student ID is S12345."
