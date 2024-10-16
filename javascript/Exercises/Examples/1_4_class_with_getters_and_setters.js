//Add a getter and setter for the age property in the Person class.

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value > 0) {
            this._age = value;
        } else {
            console.log('Age must be a positive number');
        }
    }
}

const person1 = new Person('John', 30);
person1.age = 35; // Set new age
console.log(person1.age); // 35
