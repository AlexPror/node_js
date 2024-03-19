const http = require("http");
const url = require("url");

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
const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path === "/") {
    mainPageCounter++;
    res.writeHead(200, { "Content-type": "text/html; charset=UTF-8" });
    res.write(
      `<h1>Главная страница</h1>
      <div style="color: red; font-size: 20px; margin:20px 0;"> Страница загружена ${mainPageCounter} ${changeWordCount(
        mainPageCounter
      )}</div>
      <a href="/about">О нас</a>`
    );
    res.end();
  } else if (path === "/about") {
    aboutPageCounter++;
    res.writeHead(200, { "Content-type": "text/html; charset=UTF-8" });
    res.write(
      `<h1>О нас</h1>
      <div style="color: green; font-size: 20px; margin: 20px 0;"> Страница загружена ${aboutPageCounter} ${changeWordCount(
        aboutPageCounter
      )}</div>
      <a href="/">Главная</a>`
    );
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
