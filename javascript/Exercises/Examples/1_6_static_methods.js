//Add a static method compareAges() to the Person class that compares the ages of two people.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static compareAges(person1, person2) {
        if (person1.age > person2.age) {
            return `${person1.name} is older than ${person2.name}`;
        } else if (person1.age < person2.age) {
            return `${person1.name} is younger than ${person2.name}`;
        } else {
            return `${person1.name} and ${person2.name} are of the same age`;
        }
    }
}

const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);
console.log(Person.compareAges(person1, person2)); // "John is older than Jane"
