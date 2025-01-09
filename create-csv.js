const { json2csv } = require("json-2-csv")
const fs = require("fs")

const OUTPUT_DIR = "./out"
const OUTPUT_FILE = "dict.csv"

// DB からデータを仕入れることを想定し、企業データは JSON 定義としてみる
// 単語、読みのひらがなカタカナを持つデータを定義
// https://taku910.github.io/mecab/dic.html 
const companies = [
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

// 最終的には　単語,,10,名詞,固有名詞,組織,*,*,*,よみ,ヨミ　というスキームで CSV データとする
const createCsv = (json) => {
  const formattedData = json.map(item => ({
    surface: item.name,
    leftId: "",
    rightId: "",
    cost: 1,      // 一律で小さい値を割り振る
    pos1: "名詞",
    pos2: "固有名詞",
    pos3: "組織",
    pos4: "*",
    conjugationType: "*",
    conjugationForm: "*",
    baseForm: item.name,
    reading: item.hiragana,
    pronunciation: item.katakana
  }))
  return json2csv(formattedData, { 
    prependHeader: false,          // ヘッダーを付与しない
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