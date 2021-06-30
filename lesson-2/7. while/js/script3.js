let userName = prompt("Введите имя");

while(!userName) {
    userName = prompt("Ведите не пустое имя");
    if(userName === null) {
        break;
    }
}

if(userName) {
    console.log(`Добро пожаловать, ${userName}`);
}
else {
    console.log("Не очень то и хотелось")
}

// const arr = [];

// let num = +prompt("Введите число");

// while(num){
//     arr.push(num);
//     num = +prompt("Введите число");
// }

// console.log(arr);