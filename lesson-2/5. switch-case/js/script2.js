/*
Напишите программу, рассчитывающую ЗП пользователя. Программа спрашивает
у пользователя его зарплату за 1 день. После чего спрашивает, за какой
месяц нужно подсчитать его зарплату, и выводит ее в консоль по формуле
количество рабочих дней в месяце * зарплата_в_день.
Для упрощения предположим, что в месяце, в котором 31 день - рабочих
дней 23, в месяце, в котором 30 дней - рабочих дней 22, а в феврале - 20.
*/

const sallaryPerDay = +prompt("Введите вашу зарплату за 1 день");
const month = prompt("Введите интересующий вас месяц");

