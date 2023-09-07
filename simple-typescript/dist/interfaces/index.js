"use strict";
class Cat {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
    bark() { }
}
function initializeAnimal(Animal, name) {
    const animal = new Animal(name);
    animal.setGroup('mammals');
    return animal;
}
const cat = initializeAnimal(Cat, 'Jerry');
console.log('cat', cat);
const dog = initializeAnimal(Dog, 'Ramon');
console.log('dog', dog);
dog.bark();
