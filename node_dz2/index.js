// Написать свою собственную библиотеку и опубликовать в NPM.

// Что нужно помнить при реализации:

// — Ваш модуль должен обязательно экспортировать функции которые будут полезны вашим пользователям с помощью modules.exports
// — Не забудьте указать в package.json в поле main файл, который будет основным в вашей библиотеке
// — Обязательно создайте и опишите README.md файл в корне вашего проекта
// — Если у вас есть репозиторий в github или gitlab, опубликуйте туда ваш код и в package.json укажите ссылку на репозиторий в поле repository
// — Протестируйте работу вашей библиотеки после публикации. Попробуйте установить её в любом другом проекте с помощью npm i имявашейбиблиотеки и попробуйте ее использовать.

// Формат сдачи задания:
// — Достаточно прислать ссылку на сайт https://npmjs.com/ на вашу библиотеку.

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

module.exports = { rubleKopeika };
