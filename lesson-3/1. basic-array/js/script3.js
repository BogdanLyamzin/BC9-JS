const users = ["Амфитрион", "Алкмена", "Геракл", "Автолик"];

/* чтобы получить доступ к отдельным эелментам массив,
нужно в квадратных скобках написать номер элемента. Номера начинаются с 0.
Номер элемента называют индексом массива
*/
// console.log(users);
// console.log(users[0]);
// console.log(users[2]);

/* В отличие от срок, можно менять отдельные элементы массива
через присвоение, даже меняя тип данных, который в них хранится
(но разумеется тип данных менять нежелательно)
*/

// users[2] = "Ификл";
// console.log(users);
// console.log(users[2]);

// users[1] = 25;
// console.log(users);
// console.log(users[1]);

// users[3] = ["Гермес", "Одиссей"];
// console.log(users);
// console.log(users[3]);

// const sallaries = [15000, 45000, 222000];

// const productList = ["Lenovo X120S", "Samsung Z12"];

// let arr = ["Анусуримбор Келлхус", "Анусуримбор Моээнгус", "Друз Акхеймион"];
// console.log(arr);
// arr = 25;
// console.log(arr);

const arr = ["Анусуримбор Келлхус", "Анусуримбор Моээнгус", "Друз Акхеймион"];
console.log(arr);
arr.push("Аюкли");
console.log(arr);