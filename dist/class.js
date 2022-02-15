"use strict";
class Person {
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}.My age is ${this.age}`);
    }
}
const poo3 = new Person("person", 21);
console.log(poo3);
const user = {
    name: "poo3",
    age: 25,
    userGreeting: poo3.greeting,
};
user.userGreeting();
