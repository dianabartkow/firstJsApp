export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    present() {
        console.log(`This perseon is ${this.name} and age is ${this.age}!`);
    }
}