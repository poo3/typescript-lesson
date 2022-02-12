var hasValue = false;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = "hello";
var double = "hello";
var back = "hello";
console.log(hasValue);
var person = {
    name: "tarou",
    age: 22
};
console.log(person);
var fruits = ["Apple", "Banana", 21];
// const book = ['business', 1500, false];
var book = ["business", 1500, false];
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
anything = { name: "hogehoge", age: 1000 };
var banana = "banana";
banana = anything;
console.log(banana);
// use union type
// 複数の型を受け入れることができる
// 数字、文字列など何でもごちゃまぜで入れれる
var unionType = 10;
unionType = "hello";
unionType.toUpperCase();
console.log(unionType.toUpperCase());
// use Literal
// 指定した値のみを格納できる変数を作成
var appple = "apple";
var literal = "literal";
// 3つの文字列のどれかしかいれられない
var clothSize = "large";
console.log(clothSize);
var macSet = {
    drink: "M",
    poteto: "L"
};
console.log(macSet);
// set type for function
// 基本的に引数には型をつけるようにする（つけないとany型になるため）
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(100, 1000));
// use void for function
function sayHello() {
    console.log("Hello!");
}
console.log(sayHello());
// arrow function
// 関数宣言時以外の場合
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (num) { return num * 2; };
console.log(anotherAdd(10, 100));
console.log(doubleNumber(100));
// about callback function
// コールバック関数にも型注釈をつけることができる
function printDoubleNumber(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
printDoubleNumber(10, function (num) { return num * 2; });
