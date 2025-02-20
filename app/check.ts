const test = "error" // ← セミコロンなし（Prettier ルール違反）

console.log(test) // ← 未使用の変数（ESLint ルール違反）


const foo = { bar: 'baz' } 
console.log( foo.bar );
console.log( foo.bar );