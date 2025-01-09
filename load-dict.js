const kuromojin = require('kuromojin');
const fs = require('fs');

// dict.dic を読み込む
const dicPath = './out/dict.dic'

// サンプル文字列
const sampleText = 'これは株式会社Aを含むサンプルの文字列です。';

// カスタム辞書を設定
kuromojin.tokenize(sampleText, {dicPath}).then(tokens => {
  console.log(tokens);
}).catch(error => {
  console.error('Error:', error);
});