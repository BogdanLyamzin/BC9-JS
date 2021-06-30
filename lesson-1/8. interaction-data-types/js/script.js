const num1 = 45;
const nullVar = null;
const falseVar = false;
const trueVar = true;
const stringVar = "42";
const stringVar2 = "Имя";
const undefinedVar = undefined;

// console.log(Number(nullVar))
// console.log(Number(trueVar))

// console.log(+nullVar)
// console.log(+trueVar)

// console.log(nullVar);
// console.log(trueVar);

// const userHeight = prompt("Введите ваш рост");
// console.log(+userHeight)
// console.log(num1 + nullVar + falseVar - trueVar);
// null => 0
// false => 0
// true => 1
// console.log(num1 + nullVar + falseVar - trueVar + undefinedVar);
// console.log(+undefinedVar);
// console.log(+stringVar);
// console.log(+stringVar2);

// console.log(num1 - stringVar2);
// console.log(num1 - " 32");
// console.log(num1 - "");
// console.log(num1 - " ");

// console.log(num1 - trueVar + stringVar2);
// console.log(stringVar2 + null);
// console.log(stringVar2 + false);
// console.log(stringVar2 + true);
// console.log(stringVar2 + undefined);
// console.log(stringVar + stringVar2);

const userAge = prompt("Введите ваш возраст");
const result = +userAge + 5;
console.log(result);