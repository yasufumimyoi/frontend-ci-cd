const test = "error" // ← セミコロンなし（Prettier ルール違反）

console.log(test) // ← 未使用の変数（ESLint ルール違反）


const foo = { bar: 'baz' } 
console.log( foo.bar );
console.log( foo.bar );
console.log( foo.bar );

// example.ts
consoleaa

// 型エラーを発生させるために、number型にstringを代入
let numberVariable: number = "this is a string";  // 型 'string' を型 'number' に割り当てることはできません

// 関数に間違った引数を渡す
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

greet(123);  // 引数 '123' は型 'string' に割り当てることができません