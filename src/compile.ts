// tsc -w
// ウォッチモード（.tsファイルが変更されると自動でコンパイルする）

// tsc --init
// tsconfig.jsonファイルを自動作成できる

console.log("tsconfigの色々な設定していきます");

// includeはコンパイルさせるファイルを指定する
// excludeはコンパイルさせないファイルを指定する
// filesはinclude,excludeと違いワイルドカードを使用できない

// target jsのコンパイルバージョンを指定する

// lib　string.toUpperCase()などのライブラリを設定する

// declaration　他の人に型定義を使ってもらう際に設定する
// declarationMap　他の人に型定義を使ってもらう際に設定する

// source map ブラウザでTypescript使いたいときに設定する

// outdir コンパイルされたファイルを指定したディレクトリに格納する
// rootdir コンパイル対象のルートディレクトリを指定する

// removeComments 設定に含めることによりコメントアウトされた内容を取り除きコンパイルされる

// noEmitOnError エラーが起きている際には.jsファイルを作成しないようにできる
//
