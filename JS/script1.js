// Отримуємо всі абзаци та обчислюємо їх довжину
let paragraphs = document.querySelectorAll('p');
let pArray = [];

paragraphs.forEach(paragraph => {
    pArray.push(paragraph.innerText.length);  // Додаємо довжину кожного абзацу в масив
});

console.log(pArray);  // Виводимо масив з довжинами абзаців

// Масив чисел для подальших операцій
let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

// Знаходимо максимальне та мінімальне значення
let max = Math.max(...arr);
let min = Math.min(...arr);

console.log("Максимальне: " + max);
console.log("Мінімальне: " + min);

// Підрахунок кількості парних та непарних елементів
let evenCount = arr.filter(el => el % 2 === 0).length;
let oddCount = arr.filter(el => el % 2 !== 0).length;

console.log("Кількість:");
console.log("Парні: " + evenCount);
console.log("Непарні: " + oddCount);

// Функція для перевірки, чи число є двоцифровим
function hasTwoDigits(num) {
    num = Math.abs(num);  // Перетворюємо на додатне для правильної перевірки
    return num.toString().length === 2;  // Перевіряємо кількість цифр
}

// Підрахунок двоцифрових чисел
let twoDigitNumbersCount = arr.filter(el => hasTwoDigits(el)).length;
console.log("Двоцифрові числа: " + twoDigitNumbersCount);

// Підрахунок додатних та від'ємних чисел
let positiveCount = arr.filter(el => el > 0).length;
let negativeCount = arr.filter(el => el < 0).length;

console.log("Додатні: " + positiveCount);
console.log("Від'ємні: " + negativeCount);

// Сортування масиву по зростанню
console.log("Сортований масив: ", arr.sort((a, b) => a - b));

// Реверс масиву після сортування
console.log("Реверсований масив: ", arr.reverse());

