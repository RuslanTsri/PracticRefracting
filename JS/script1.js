// Отримуємо всі абзаци та обчислюємо їх довжину
let paragraphs = document.querySelectorAll('p');
let pArray = Array.from(paragraphs).map(paragraph => paragraph.innerText.length);

console.log(pArray); // Виводимо масив з довжинами абзаців

// Масив чисел для подальших операцій
let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

// Знаходимо максимальне та мінімальне значення
let max = Math.max(...arr);
let min = Math.min(...arr);

console.log("Максимальне:", max);
console.log("Мінімальне:", min);

// Підрахунок кількості парних, непарних, додатних і від'ємних чисел
let evenCount = 0, oddCount = 0, positiveCount = 0, negativeCount = 0, twoDigitNumbersCount = 0;

arr.forEach(num => {
    if (num % 2 === 0) evenCount++;
    else oddCount++;

    if (num > 0) positiveCount++;
    else if (num < 0) negativeCount++;

    if (Math.abs(num) >= 10) twoDigitNumbersCount++;
});

console.log("Кількість парних:", evenCount);
console.log("Кількість непарних:", oddCount);
console.log("Додатні:", positiveCount);
console.log("Від'ємні:", negativeCount);
console.log("Двоцифрові числа:", twoDigitNumbersCount);

// Сортування масиву по зростанню (без зміни оригіналу)
let sortedArr = [...arr].sort((a, b) => a - b);
console.log("Сортований масив:", sortedArr);

// Реверс масиву (також без зміни оригіналу)
let reversedArr = [...sortedArr].reverse();
console.log("Реверсований масив:", reversedArr);

