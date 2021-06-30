const floor = +prompt("Введите ваш этаж");

for(let i = 1; i <= floor; i++) {
    if(i === 4) {
        console.log(`3а этаж`);
        continue;
    }
    console.log(`${i} этаж`);
}

console.log("Ваш этаж!");