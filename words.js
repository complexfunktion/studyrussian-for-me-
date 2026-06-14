// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ロシア語単語データ  /  Данные русских слов
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// アクセント記号の入力方法：
//   母音の直後に U+0301（結合アクセント）を付けます。
//   例: е́ (е + ́)、а́ (а + ́)、и́ (и + ́)
//   ё は常に強勢なのでそのまま使えます。
//
// 管理ページ (admin.html) からも追加・編集・エクスポートができます。
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const WORD_DATA = {
  version: 1,
  lessons: [
    {
      id: 1,
      title: "Урок 1 — 挨拶・基本表現",
      words: [
        { japanese: "こんにちは（くだけた言い方）", russian: "приве\u0301т" },
        { japanese: "こんにちは（丁寧な言い方）", russian: "здра\u0301вствуйте" },
        { japanese: "ありがとう", russian: "спаси\u0301бо" },
        { japanese: "どういたしまして／どうぞ", russian: "пожа\u0301луйста" },
        { japanese: "はい", russian: "да" },
        { japanese: "いいえ", russian: "нет" },
        { japanese: "さようなら（くだけた言い方）", russian: "пока\u0301" },
        { japanese: "さようなら（丁寧な言い方）", russian: "до свида\u0301ния" },
        { japanese: "おはようございます", russian: "до\u0301брое у\u0301тро" },
        { japanese: "こんにちは（昼の挨拶）", russian: "до\u0301брый день" },
        { japanese: "こんばんは", russian: "до\u0301брый ве\u0301чер" },
        { japanese: "おやすみなさい", russian: "споко\u0301йной но\u0301чи" },
        { japanese: "すみません（呼びかけ）", russian: "извини\u0301те" },
        { japanese: "ごめんなさい", russian: "прости\u0301те" },
        { japanese: "元気ですか？", russian: "как дела\u0301?" },
        { japanese: "元気です", russian: "хорошо\u0301" },
        { japanese: "よくないです", russian: "пло\u0301хо" },
        { japanese: "わかりません", russian: "не понима\u0301ю" },
        { japanese: "もう一度言ってください", russian: "повтори\u0301те, пожа\u0301луйста" },
        { japanese: "お名前は？", russian: "как вас зову\u0301т?" },
        { japanese: "私の名前は〜です", russian: "меня\u0301 зову\u0301т..." },
        { japanese: "はじめまして", russian: "о\u0301чень прия\u0301тно" },
        { japanese: "ようこそ", russian: "добро\u0301 пожа\u0301ловать" }
      ]
    },
    {
      id: 2,
      title: "Урок 2 — 数字",
      words: [
        { japanese: "0（ゼロ）", russian: "ноль" },
        { japanese: "1", russian: "оди\u0301н" },
        { japanese: "2", russian: "два" },
        { japanese: "3", russian: "три" },
        { japanese: "4", russian: "четы\u0301ре" },
        { japanese: "5", russian: "пять" },
        { japanese: "6", russian: "шесть" },
        { japanese: "7", russian: "семь" },
        { japanese: "8", russian: "во\u0301семь" },
        { japanese: "9", russian: "де\u0301вять" },
        { japanese: "10", russian: "де\u0301сять" },
        { japanese: "11", russian: "оди\u0301ннадцать" },
        { japanese: "12", russian: "двена\u0301дцать" },
        { japanese: "13", russian: "трина\u0301дцать" },
        { japanese: "14", russian: "четы\u0301рнадцать" },
        { japanese: "15", russian: "пятна\u0301дцать" },
        { japanese: "16", russian: "шестна\u0301дцать" },
        { japanese: "17", russian: "семна\u0301дцать" },
        { japanese: "18", russian: "восемна\u0301дцать" },
        { japanese: "19", russian: "девятна\u0301дцать" },
        { japanese: "20", russian: "два\u0301дцать" },
        { japanese: "30", russian: "три\u0301дцать" },
        { japanese: "40", russian: "со\u0301рок" },
        { japanese: "50", russian: "пятьдеся\u0301т" },
        { japanese: "100", russian: "сто" },
        { japanese: "1,000（千）", russian: "ты\u0301сяча" },
        { japanese: "1,000,000（百万）", russian: "миллио\u0301н" }
      ]
    },
    {
      id: 3,
      title: "Урок 3 — 色",
      words: [
        { japanese: "赤", russian: "кра\u0301сный" },
        { japanese: "青（濃い）", russian: "си\u0301ний" },
        { japanese: "水色（明るい青）", russian: "голубо\u0301й" },
        { japanese: "緑", russian: "зелёный" },
        { japanese: "黄色", russian: "жёлтый" },
        { japanese: "白", russian: "бе\u0301лый" },
        { japanese: "黒", russian: "чёрный" },
        { japanese: "灰色", russian: "се\u0301рый" },
        { japanese: "茶色", russian: "кори\u0301чневый" },
        { japanese: "オレンジ", russian: "ора\u0301нжевый" },
        { japanese: "紫", russian: "фиоле\u0301товый" },
        { japanese: "ピンク", russian: "ро\u0301зовый" }
      ]
    }
  ]
};
