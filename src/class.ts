class Person {
  name: string;
  age: number;
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }
  // class内のthisについても型宣言をしてあげる
  greeting(this: { name: string; age: number }) {
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
