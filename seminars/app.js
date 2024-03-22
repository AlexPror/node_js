// const arr = [1, 2, 3, 4, 5, 6];
// console.log(
//   "Результат:",
//   arr.reduce((acc, val) => (acc += val), 0)
// );

// http  сервер - это программа которая запускается на компьютере и принимает сетевые запросы

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("Запрос получен");
// });

// const port = 3000;

// server.listen(port, () => {
//   console.log(`Сервер запущен на порту ${port}`);
// });

//1
// function counter(n) {
//   console.log(n)
//   counter(n+1);
// }
// counter(0)

// setTimeout(() => {
//   console.log("Скрипт успешно завершен");
//   process.exit()
// }, 1000)
// В представленном коде функция counter вызывает саму себя рекурсивно без условия завершения, что приведет к бесконечному циклу вызовов и переполнению стека вызовов (stack overflow). Это происходит из-за отсутствия условия или механизма, который бы прерывал рекурсивные вызовы функции.
// Для исправления данной проблемы необходимо добавить условие, которое остановит рекурсивные вызовы функции counter. Например, можно добавить условие, при котором рекурсия будет прекращаться при достижении определенного значения n. Вот исправленный код:
// javascript
// function counter(n) {
//   if (n < 5) {
//     // Пример: остановиться при достижении значения 5
//     console.log(n);
//     counter(n + 1);
//   }
// }

// counter(0);

// setTimeout(() => {
//   console.log("Скрипт успешно завершен");
//   process.exit();
// }, 1000);

// В этом исправленном коде добавлено условие if (n < 5), которое останавливает рекурсивные вызовы функции counter при достижении значения n равного 5. Теперь код не будет падать из-за переполнения стека вызовов и успешно завершится через секунду после выполнения.

// помимо добавления условия для завершения рекурсии, существуют и другие способы управления рекурсивными вызовами функций. Вот несколько альтернативных подходов:
// Использование базового случая:
// Добавление базового случая в рекурсивную функцию, который определяет, когда рекурсия должна завершиться. Например, можно проверить, достигло ли значение n определенного условия, и если да, прекратить рекурсию.
// Использование итерации:
// Вместо рекурсии можно использовать циклы (например, for или while), чтобы достичь того же результата без рекурсивных вызовов.
// Использование внешних переменных:
// Использование внешних переменных для отслеживания состояния и контроля рекурсивных вызовов. Например, можно использовать глобальную переменную для хранения состояния и принимать решение о продолжении или завершении рекурсии на основе этой переменной.
// Использование колбэков или промисов:
// Использование колбэков или промисов для управления асинхронными операциями и рекурсивными вызовами, что позволяет более гибко контролировать поток выполнения.
// Выбор конкретного подхода зависит от конкретной задачи и требований к коду. Каждый из этих методов может быть эффективным способом управления рекурсивными вызовами функций в JavaScript.

// function counter(n) {
//   console.log(n);
//   setTimeout(() => {
//     counter(n + 1);
//   }, 1000); // Задержка в 1 секунду
// }

// counter(0);

// setTimeout(() => {
//   console.log("Скрипт успешно завершен");
//   process.exit();
// }, 6000);
// //============================================
// function counter(n, limit) {
//   console.log(n);
//   if (n < limit) {
//     counter(n + 1, limit);
//   }
// }

// counter(0, 5);

// setTimeout(() => {
//   console.log("Скрипт успешно завершен");
//   process.exit();
// }, 1000);

//=================================

// Создаем сервер

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, {
//       "Content-type": "text/html; charset=UTF-8",
//     });
//     res.end("<h1>Главная страница</h1>");
//   } else if (req.url === "/about") {
//     res.writeHead(200, {
//       "Content-type": "text/html; charset=UTF-8",
//     });
//     res.end("<h1>About</h1>");
//   }
// });
// const port = 3000;
// server.listen(port, () => {
//   console.log(`Сервер запущен на порту ${port}`);
// });

// Семинар 2 Работа с NPM

// Семинар 3 Работа с Express

// Создайте файл writePerson.js
// 2. Напишите код, который создаст файл person.json в директории
// запускаемого скрипта и запишет в файл следующий объект:

// const user = {
//   name: "Ivan",
//   surname: "Ivanov",
//   age: 30,
//   city: "Moskow",
// };

const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "user.json");
console.log(jsonPath);

const user = JSON.parse(fs.readFileSync(jsonPath, "utf8")); // получаем объект
user.age = user.age - 10;
user.city = "Kaluga";
fs.writeFileSync(jsonPath, JSON.stringify(user, null, 2));
