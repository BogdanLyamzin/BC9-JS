const name = prompt("Введите имя")
const lastName = prompt("Введите фамилию")
const middleName = prompt("Введите отчество")

// const welcomeText = "Добро пожаловать, " + name + " " + lastName + " " + middleName + ", GoIT ждет вас!";
const welcomeText = `Добро пожаловать, ${name} ${lastName} ${middleName}, GoIT ждет вас!`;
console.log(welcomeText);
console.log(`Как говорил 'классик': "Поехали!"`);