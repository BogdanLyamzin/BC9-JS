const userAge = +prompt("Введите ваш возраст");

/* если внутри круглых скобок после ключевого слова if будет true,
то выполнится то, что идет в фигурных скобках сразу после них
*/
if(userAge >= 18) {
    alert("Добро пожаловать в ночной клуб Устрица!");
    if(userAge >= 21) {
        alert("У нас отличный выбор коктейлей!");
    }
}
// иначе выполнится то, что внутри фигурных скобок после инструкции else
else {
    alert("Купи себе наконец поддельные права!");
}