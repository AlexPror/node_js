function rubleKopeika(number) {
  let rubles = Math.floor(number);
  let kopecks = Math.round((number - rubles) * 100);

  if (!isNaN(number) && number < 0) {
    return "Пожалуйста, введите положительное число";
  }
  function conjugatesRubleCount(rubles) {
    if (rubles % 10 === 1 && rubles !== 11) return `${rubles} рубль`;
    if (rubles % 10 >= 2 && rubles % 10 <= 4 && (rubles < 10 || rubles > 20))
      return `${rubles} рубля`;
    return `${rubles} рублей`;
  }

  function conjugatesKopeckCount(kopecks) {
    if (kopecks === 1) return `${kopecks} копейка`;
    if (
      kopecks % 10 >= 2 &&
      kopecks % 10 <= 4 &&
      (kopecks < 10 || kopecks > 20)
    )
      return `${kopecks} копейки`;
    return `${kopecks} копеек`;
  }
  return `${conjugatesRubleCount(rubles)} ${conjugatesKopeckCount(kopecks)}`;
}

function dollarCent(number) {
  let dollar = Math.floor(number);
  let cent = Math.round((number - dollar) * 100);

  if (!isNaN(number) && number < 0) {
    return "Пожалуйста, введите положительное число";
  }
  function conjugatesDollarCount(dollar) {
    if (dollar % 10 === 1 && dollar !== 11) return `${dollar} доллар`;
    if (dollar % 10 >= 2 && dollar % 10 <= 4 && (dollar < 10 || dollar > 20))
      return `${dollar} доллара`;
    return `${dollar} долларов`;
  }

  function conjugatesCentCount(cent) {
    if (cent === 1) return `${cent} цент`;
    if (cent % 10 >= 2 && cent % 10 <= 4 && (cent < 10 || cent > 20))
      return `${cent} цента`;
    return `${cent} центов`;
  }
  return `${conjugatesDollarCount(dollar)} ${conjugatesCentCount(cent)}`;
}

function euroEuroCent(number) {
  let euro = Math.floor(number);
  let eurocent = Math.round((number - euro) * 100);

  if (!isNaN(number) && number < 0) {
    return "Пожалуйста, введите положительное число";
  }
  function conjugatesEuroCount(euro) {
    return `${euro} евро`;
  }

  function conjugatesEuroCentCount(eurocent) {
    if (eurocent === 1) return `${eurocent} евроцент`;
    if (
      eurocent % 10 >= 2 &&
      eurocent % 10 <= 4 &&
      (eurocent < 10 || eurocent > 20)
    )
      return `${eurocent} евроцента`;
    return `${eurocent} евроцентов`;
  }
  return `${conjugatesEuroCount(euro)} ${conjugatesEuroCentCount(eurocent)}`;
}

function yenJapan(number) {
  let yen = Math.floor(number);
  let sen = Math.round((number - yen) * 100);

  if (!isNaN(number) && number < 0) {
    return "Пожалуйста, введите положительное число";
  }
  function yenCount(yen) {
    if (yen % 10 === 1 && yen !== 11) return `${yen} йена`;
    if (yen % 10 >= 2 && yen % 10 <= 4 && (yen < 10 || yen > 20))
      return `${yen} йены`;
    return `${yen} йен`;
  }

  function yenSenCount(sen) {
    if (sen === 1) return `${sen} сен`;
    if (sen % 10 >= 2 && sen % 10 <= 4 && (sen < 10 || sen > 20))
      return `${sen} сена`;
    return `${sen} сенов`;
  }
  return `${yenCount(yen)} ${yenSenCount(sen)}`;
}

function yuanChina(number) {
  let yuan = Math.floor(number);
  let jiao = Math.round((number - yuan) * 10);
  let fen = Math.round((number % 0.1) * 100);
  if (!isNaN(number) && number < 0) {
    return "Пожалуйста, введите положительное число";
  }
  function yuanCount(yuan) {
    if (yuan % 10 === 1 && yuan !== 11) return `${yuan} юань`;
    if (yuan % 10 >= 2 && yuan % 10 <= 4 && (yuan < 10 || yuan > 20))
      return `${yuan} юаня`;
    return `${yuan} юаней`;
  }

  function yuanJiaoCount(jiao) {
    return `${jiao} цзяо`;
  }

  function yuanFenCount(fen) {
    if (fen % 10 >= 2 && fen % 10 <= 4) return `${fen} фэня`;
    return `${fen} фэнь`;
  }

  return `${yuanCount(yuan)} ${yuanJiaoCount(jiao)} ${yuanFenCount(fen)}`;
}

module.exports = {
  rubleKopeika,
  dollarCent,
  euroEuroCent,
  yenJapan,
  yuanChina,
};
