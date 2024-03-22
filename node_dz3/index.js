// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.

const express = require("express");
const fs = require("fs");
const path = require("path");
const data = require("./count.json");
const app = express();

let aboutPageCounter = data.aboutPageCounter;
let mainPageCounter = data.mainPageCounter;

function changeWordCount(counter) {
  if (counter === 12 || counter === 13 || counter === 14) {
    return "раз";
  } else if (counter % 10 === 2 || counter % 10 === 3 || counter % 10 === 4) {
    return "раза";
  } else {
    return "раз";
  }
}

app.get("/", (req, res) => {
  mainPageCounter++;
  countSave();
  res.send(`<h1>Главная страница</h1>
  <div style="color: red; font-size: 20px; margin:20px 0;"> Страница загружена ${mainPageCounter} ${changeWordCount(
    mainPageCounter
  )}</div>
  <a href="/about">О нас</a>`);
});

app.get("/about", (req, res) => {
  aboutPageCounter++;
  countSave();
  res.send(`<h1>О нас</h1>
  <div style="color: green; font-size: 20px; margin: 20px 0;"> Страница загружена ${aboutPageCounter} ${changeWordCount(
    aboutPageCounter
  )}</div>
  <a href="/">Главная</a>`);
});

function countSave() {
  const jsonPath = path.join(__dirname, "count.json");
  const count = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  count.mainPageCounter = mainPageCounter;
  count.aboutPageCounter = aboutPageCounter;
  fs.writeFileSync(jsonPath, JSON.stringify(count, null, 2));
}

app.listen(3000);
