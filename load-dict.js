const kuromojin = require('kuromojin');
const fs = require('fs');

// dict.dic を読み込む
const dictPath = './out/dict.dic';
const dictData = fs.readFileSync(dictPath, 'utf-8');

// サンプル文字列
const sampleText = 'これは株式会社Aを含むサンプルの文字列です。';

// 形態素解析を行う
kuromojin.tokenize(sampleText).then(tokens => {
  console.log(tokens);
}).catch(error => {
  console.error('Error:', error);
});