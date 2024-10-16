// Make the age property private by using closures or symbols, and provide methods to access and modify it

const Person = (() => {
    const _age = new WeakMap();

    class Person {
        constructor(name, age) {
            this.name = name;
            _age.set(this, age);
        }

        getAge() {
            return _age.get(this);
        }

        setAge(age) {
            if (age > 0) {
                _age.set(this, age);
            } else {
                console.log('Age must be a positive number');
            }
        }
    }

    return Person;
})();

const person1 = new Person('John', 30);
console.log(person1.getAge()); // 30
person1.setAge(35);
console.log(person1.getAge()); // 35
