const express = require("express");

const app = express();

let mainPageCounter = 0;
let aboutPageCounter = 0;

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
  res.send(`<h1>Главная страница</h1>
  <div style="color: red; font-size: 20px; margin:20px 0;"> Страница загружена ${mainPageCounter} ${changeWordCount(
    mainPageCounter
  )}</div>
  <a href="/about">О нас</a>`);
});

app.get("/about", (req, res) => {
  aboutPageCounter++;
  res.send(`<h1>О нас</h1>
  <div style="color: green; font-size: 20px; margin: 20px 0;"> Страница загружена ${aboutPageCounter} ${changeWordCount(
    aboutPageCounter
  )}</div>
  <a href="/">Главная</a>`);
});

app.listen(3000);
