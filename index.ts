let hasValue = false;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12
let single: string = 'hello';
let double: string = 'hello';
let back: string = 'hello';

console.log(hasValue);

const person = {
  name: "tarou",
  age: 22
}

console.log(person)

const fruits = ['Apple', 'Banana', 21]

// const book = ['business', 1500, false];
const book: [string, number, boolean] = [
  'business', 1500, false
];

// use enum
// 列挙型（3つ以上のフラグがあるときに使用する） 

enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT;

console.log(coffee)

// use any type
// anyなるだけ使わないようにするのがいい

let anything: any = true;
anything = { name: 'hogehoge', age: 1000 }

let banana = 'banana'
banana = anything

console.log(banana)

// use union type
// 複数の型を受け入れることができる
// 数字、文字列など何でもごちゃまぜで入れれる

let unionType: number | string = 10
unionType = "hello"
unionType.toUpperCase()

console.log(unionType.toUpperCase())

// use Literal
// 指定した値のみを格納できる変数を作成

const appple: 'apple' = 'apple'
const literal = 'literal'

// 3つの文字列のどれかしかいれられない
let clothSize: 'small' | 'medium' | 'large' = 'large'

console.log(clothSize)