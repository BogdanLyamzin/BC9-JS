/*
Цикл for ... of позволяет перебрать массив без описания условия
его перебора, при этом сохраняя КАЖДЫЙ перебираемый элемент
массива в отдельную переменную, что немного удобнее обычного цикла for
*/

const greateHouses = ["Старки", "Талли", "Аррены", "Ланнистеры", "Баратеоны", "Таргариены", "Тиреллы", "Грейджои"];

/*
for (let i = 0; i < greateHouses.length; i +=1) {
    console.log(greateHouses[i]);
}
*/
for(const house of greateHouses) {
    console.log(house);
}
/*
for(let i = 0; i < greatHouses.length; i++) {
    const house = greateHouses[i];
    console.log(house);
}
*/