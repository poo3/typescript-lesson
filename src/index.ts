let hasValue = false;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = "hello";
let double: string = "hello";
let back: string = "hello";

console.log(hasValue);

const person = {
  name: "tarou",
  age: 22,
};

console.log(person);

const fruits = ["Apple", "Banana", 21];

// const book = ['business', 1500, false];
const book: [string, number, boolean] = ["business", 1500, false];

// use enum
// 列挙型（3つ以上のフラグがあるときに使用する）

enum CoffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};

coffee.size = CoffeeSize.SHORT;

console.log(coffee);

// use any type
// anyなるだけ使わないようにするのがいい

let anything: any = true;
anything = { name: "hogehoge", age: 1000 };

let banana = "banana";
banana = anything;

console.log(banana);

// use union type
// 複数の型を受け入れることができる
// 数字、文字列など何でもごちゃまぜで入れれる

let unionType: number | string = 10;
unionType = "hello";
unionType.toUpperCase();

console.log(unionType.toUpperCase());

// use Literal
// 指定した値のみを格納できる変数を作成

const appple: "apple" = "apple";
const literal = "literal";

// 3つの文字列のどれかしかいれられない
let clothSize: "small" | "medium" | "large" = "large";

console.log(clothSize);

// type aries
type setSize = "S" | "M" | "L";

const macSet: {
  drink: setSize;
  poteto: setSize;
} = {
  drink: "M",
  poteto: "L",
};

console.log(macSet);

// set type for function

// 基本的に引数には型をつけるようにする（つけないとany型になるため）
function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(100, 1000));

// use void for function

function sayHello(): void {
  console.log("Hello!");
}

console.log(sayHello());

// arrow function
// 関数宣言時以外の場合

const anotherAdd: (num1: number, num2: number) => number = function (
  num1,
  num2
) {
  return num1 + num2;
};

const doubleNumber: (num: number) => number = (num) => num * 2;

console.log(anotherAdd(10, 100));
console.log(doubleNumber(100));

// about callback function
// コールバック関数にも型注釈をつけることができる

function printDoubleNumber(num: number, cb: (num: number) => number) {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}

printDoubleNumber(10, (num) => num * 2);

// about unknown
// 使用するときは型を保証して上げる必要がある

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 10;
unknownInput = "unknown";
unknownInput = true;
unknownInput = "text unkonwnInput";

// anyはなんにでも自由に使える
text = anyInput;
// 　text = unknownInput はerrorになる
// unknownは下記のように型を保証して使用して上げる必要がある

if (typeof unknownInput === "string") {
  text = unknownInput;
}

console.log(text);

// about never type
// 決して何も返さない宣言

function error(message: string): never {
  throw new Error(message);
}
console.log(error("This is an error"));
