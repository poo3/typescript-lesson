"use strict";
let hasValue = false;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = "hello";
let double = "hello";
let back = "hello";
console.log(hasValue);
const person = {
    name: "tarou",
    age: 22,
};
console.log(person);
const fruits = ["Apple", "Banana", 21];
const book = ["business", 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.SHORT;
console.log(coffee);
let anything = true;
anything = { name: "hogehoge", age: 1000 };
let banana = "banana";
banana = anything;
console.log(banana);
let unionType = 10;
unionType = "hello";
unionType.toUpperCase();
console.log(unionType.toUpperCase());
const appple = "apple";
const literal = "literal";
let clothSize = "large";
console.log(clothSize);
const macSet = {
    drink: "M",
    poteto: "L",
};
console.log(macSet);
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(100, 1000));
function sayHello() {
    console.log("Hello!");
}
console.log(sayHello());
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = (num) => num * 2;
console.log(anotherAdd(10, 100));
console.log(doubleNumber(100));
function printDoubleNumber(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
printDoubleNumber(10, (num) => num * 2);
let unknownInput;
let anyInput;
let text;
unknownInput = 10;
unknownInput = "unknown";
unknownInput = true;
unknownInput = "text unkonwnInput";
text = anyInput;
if (typeof unknownInput === "string") {
    text = unknownInput;
}
console.log(text);
function error(message) {
    throw new Error(message);
}
console.log(error("This is an error"));
