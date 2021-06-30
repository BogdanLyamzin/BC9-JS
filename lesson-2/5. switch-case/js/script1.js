const sallary = prompt("Введите вашу зарплату");
const sallaryCurrency = prompt("Введите валюту вашей зарплаты: usd, euro, uah");


// console.log(sallary);
// switch(sallary) {
//     case "4000":
//         alert("Сравнение строгое!")
// }
let result = 0;
switch(sallaryCurrency){
    case "usd": // sallary == "usd"
        result = 27.6 * sallary;
        break;
    case "euro":
        result = 33.3 * sallary;
        break;
    default:
        result = sallary;
}

// if(sallaryCurrency === "usd"){
//     result = 27.6 * sallary;
// } else if(sallaryCurrency === "euro") {
//     result = 33.3 * sallary;
// } else {
//     result = sallary
// }

console.log(`Ваша зарплата в грн составляет ${result}`)