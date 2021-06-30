let userAge = +prompt("Введите ваш возраст");
// console.log(userAge)
// console.log(Number.isNaN(userAge))

if(Number.isNaN(userAge)) {
  userAge = +prompt("Введите ваш возраст только числом");
}

