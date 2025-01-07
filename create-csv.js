const { json2csv } = require("json-2-csv")

const OUTPUT_DIR = "./out"
const OUTPUT_FILE = "dict.csv"

import * as fs from "fs"

// DB からデータを仕入れることを想定し、企業データは JSON 定義としてみる
// 以下に従い、単語、読みのひらがなカタカナを持つデータを定義
// 最終的には　単語,,,名詞,固有名詞,組織,*,*,*,よみ,ヨミ　というスキームで CSV データとする
// https://taku910.github.io/mecab/dic.html 
const companies = {
  "companies": [
    {
      "name": "株式会社A",
      "hiragana": "かぶしきがいしゃA",
      "katakana": "カブシキガイシャA"
    },
    {
      "name": "株式会社B",
      "hiragana": "かぶしきがいしゃB",
      "katakana": "カブシキガイシャB"
    },
    {
      "name": "株式会社C",
      "hiragana": "かぶしきがいしゃC",
      "katakana": "カブシキガイシャC"
    },
    {
      "name": "株式会社D",
      "hiragana": "かぶしきがいしゃD",
      "katakana": "カブシキガイシャD"
    },
    {
      "name": "株式会社E",
      "hiragana": "かぶしきがいしゃE",
      "katakana": "カブシキガイシャE"
    },
    {
      "name": "株式会社F",
      "hiragana": "かぶしきがいしゃF",
      "katakana": "カブシキガイシャF"
    },
    {
      "name": "株式会社G",
      "hiragana": "かぶしきがいしゃG",
      "katakana": "カブシキガイシャG"
    },
    {
      "name": "株式会社H",
      "hiragana": "かぶしきがいしゃH",
      "katakana": "カブシキガイシャH"
    },
    {
      "name": "株式会社I",
      "hiragana": "かぶしきがいしゃI",
      "katakana": "カブシキガイシャI"
    },
    {
      "name": "株式会社J",
      "hiragana": "かぶしきがいしゃJ",
      "katakana": "カブシキガイシャJ"
    },
    {
      "name": "株式会社K",
      "hiragana": "かぶしきがいしゃK",
      "katakana": "カブシキガイシャK"
    }
  ]
}

const createCsv = (json) => {
  return json2csv(json, { 
    checkSchemaDifferences: true   // 各データのスキーマの違いをチェック
   })
}

const saveCsv = (csv) => {
  if(!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(`${OUTPUT_DIR}/${OUTPUT_FILE}`, csv)
}

const main = () => {
  const csv = createCsv(companies)
  saveCsv(csv)
}

main()