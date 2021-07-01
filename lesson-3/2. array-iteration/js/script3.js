const users = ["Атос", "Портос", "Арамис", "Дартаньян"];

const user = prompt("Кого вы ищите?");

let result = false;
for(let i = 0; i < users.length; i++) {
    if(users[i] === user) {
        result = true;
    }
}
if(result) {
    console.log(`Сейчас ${user} выйдет`);
}
else {
    console.log(`${user} не найден`);
}