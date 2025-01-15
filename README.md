# sample-dict-maker

# 実行までの手順
1. データを含む csv を作成する
```json
株式会社A,*,*,1,名詞,固有名詞,組織,*,*,株式会社A,かぶしきがいしゃA,カブシキガイシャA
株式会社B,*,*,1,名詞,固有名詞,組織,*,*,株式会社B,かぶしきがいしゃB,カブシキガイシャB
...
```
2. kuromoji.js のリポジトリをクローン、パッケージをインストール
```json
git clone git@github.com:takuyaa/kuromoji.js.git
npm clean-install
```
※ kuromoji.js リポジトリ内で使用する Node.js バージョンは v11 以前に下げておく（Ex. asdf なら `asdf local nodejs 11.15.0`）
3. `node_modules/mecab-ipadic-seed/lib/dict` 内にcsvを設置
4. 辞書ビルドを実行
```json
npm run build-dict
```
5. `dict` フォルダ直下にビルド結果が生成されるので、プロジェクト直下にフォルダをコピー
```json
cp -r ~/kuromoji.js/dict ~/my-proj/
```
6. 呼び出したいコード内の`kuromojin.tokenize` のオプション内に `dicPath` として`dict`フォルダのパスを与える
```tsx
// dict.dic を読み込む
const dicPath = './dict'

// カスタム辞書を設定
kuromojin.tokenize(sampleText, {dicPath}).then(tokens => {
  console.log(tokens);
}).catch(error => {
  console.error('Error:', error);
});
```