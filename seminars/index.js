require("colors");

const { calculateResultSum } = require("./calculateResultSum");
const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
const resultText = `Общая стоимость покупок: ${total} рублей`;

console.log(total > 50 ? resultText.red : resultText.green);
