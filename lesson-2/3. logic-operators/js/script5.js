const userName = prompt("Кто ты из дома Ланнистеров?")
const user = userName || null;
console.log(user);
const word = prompt("Введите официальный девиз дома Ланнистеров")

const status = user && word === "Услышь мой рёв!" && "Тайвин Ланнистер";

if(status) {
  console.log("Добро пожаловать домой, владыка Утеса Кастерли!")
}
else {
  console.log("Пошел прочь, самозванец!")
}