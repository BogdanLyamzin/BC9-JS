let userName = prompt("Введите ваше имя");
console.log(userName.length) // индекс последнего элемента + 1
if(userName.length < 2) {
  userName = prompt("Введите ваше имя");
}

console.log(userName.toLowerCase());
console.log(userName);
console.log(userName.toUpperCase());
console.log(userName);

// const str1 = "Если у тебя очень большая строка которая не влазит в экран " +
// "тебе приходится соединять обычные строки через +";
// console.log(str1);
// const str2 = `Если у тебя очень большая строка которая не влазит в экран 
// используй шаблонные строки, Люк!`;
// console.log(str2);
const str3 = "Если ты хочешь сделать перенос строки, используй \\n \n Люк!";
console.log(str3);

// const str = ` "Lara" 'Lara'  \`ggggg\` `;
// console.log(str);