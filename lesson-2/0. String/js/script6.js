const name = prompt("Введите имя")
const lastName = prompt("Введите фамилию")
const middleName = prompt("Введите отчество")

// const welcomeText = "Добро пожаловать, " + name + " " + lastName + " " + middleName + ", GoIT ждет вас!";
const welcomeText = `Добро пожаловать, ${name.toUpperCase()} ${lastName} ${middleName}, GoIT ждет вас!`;
console.log(welcomeText);
console.log(`Как говорил 'классик': "Поехали!"`);

const str2 = `Если у тебя очень большая строка которая не влазит в экран 
используй шаблонные строки, Люк!`;
console.log(str2);