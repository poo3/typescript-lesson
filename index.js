var hasValue = false;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = 'hello';
var back = 'hello';
console.log(hasValue);
var person = {
    name: "tarou",
    age: 22
};
console.log(person);
var fruits = ['Apple', 'Banana', 21];
// const book = ['business', 1500, false];
var book = [
    'business', 1500, false
];
// use enum
// 列挙型（3つ以上のフラグがあるときに使用する） 
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
console.log(coffee);
// use any type
// anyなるだけ使わないようにするのがいい
var anything = true;
anything = { name: 'hogehoge', age: 1000 };
var banana = 'banana';
banana = anything;
console.log(banana);
