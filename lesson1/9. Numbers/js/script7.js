// const result1 = Math.floor(1.7);
// console.log(result1);
// const result2 = Math.ceil(1.3);
// console.log(result2);
// console.log(Math.round(1.7));
// console.log(Math.round(1.3));
// console.log(Math.floor("43.6d"))
// const maxValue = Math.max(3, 4, 7, 5);
// console.log(maxValue)

// const minValue = Math.min(3, 4, 7, 5);
// console.log(minValue);

// const randomValue = +Math.random();
// console.log(randomValue)

const userWeight = +prompt("Введите ваш вес в кг");
const userWeightPound = +(userWeight / 0.453).toFixed(2);
console.log(userWeightPound);
console.log(typeof userWeightPound);

