class Person {
  name: string;
  age: number;
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }
}

const poo3 = new Person("poo3", 21);
console.log(poo3);
