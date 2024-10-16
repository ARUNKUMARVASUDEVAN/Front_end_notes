//Create a Person class with properties name and age. Create an instance of the class and log the name and age to the console.


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person('John', 30);
console.log(person1.name); // John
console.log(person1.age);  // 30
