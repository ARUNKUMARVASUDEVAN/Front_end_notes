//Create a Student class that inherits from the Person class. Add a studentID property to the Student class and a study() method that logs a message.

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

const student1 = new Student('Alice', 20, 'S12345');
student1.greet(); // "Hello, my name is Alice and I am 20 years old."
student1.study(); // "Alice is studying."
