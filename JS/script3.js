// Визначення матриці для подальших обчислень
const matrix = [
  [3, 7, 0, 4, 0],
  [6, -8, 1, -9, 0],
  [12, 5, 6, 6, 7],
  [9, 7, 8, 8, 8],
  [-35, 12, 9, 0, 4],
];

// Виведення матриці для наочності
console.log("Матриця: ", matrix);

// Обчислення кількості додатних елементів у матриці
let positiveCount = matrix
  .map((row) => row.filter((el) => el > 0).length) // Рахуємо кількість додатних елементів у кожному рядку
  .reduce((sum, el) => sum + el, 0); // Підсумовуємо всі значення
console.log("Додатні елементи: " + positiveCount);

// Підрахунок кількості рядків, які не містять нуля
let rowsWithoutZeroCount = matrix.filter((row) => !row.includes(0)).length; // Залишаємо тільки ті рядки, в яких немає нулів // Рахуємо кількість таких рядків
console.log("Кількість рядків, які не містять нуль: " + rowsWithoutZeroCount);

// Функція для підрахунку кількості стовпців, що містять хоча б один нуль
function getColsWithZeroCount(matrix) {
  return matrix[0].reduce(
    (count, _, colIndex) =>
      matrix.some((row) => row[colIndex] === 0) ? count + 1 : count,
    0
  );
}

console.log(
  "Кількість стовпців, які містять нуль: " + getColsWithZeroCount(matrix)
);

// Функція для знаходження індексу рядка з найдовшою серією повторюваних елементів
function getRowWithLongestSeriesIndex(matrix) {
  let longestSeries = 1,
    index = -1;

  matrix.forEach((row, i) => {
    let currentSeries = row.reduce(
      (max, el, j) => {
        if (j > 0 && row[j - 1] === el) {
          max.series++;
        } else {
          if (max.series > max.longest) {
            max.longest = max.series;
          }
          max.series = 1;
        }
        return max;
      },
      { series: 1, longest: 1 }
    );

    if (currentSeries.longest > longestSeries) {
      longestSeries = currentSeries.longest;
      index = i;
    }
  });

  return index;
}

let index = getRowWithLongestSeriesIndex(matrix);
index === -1
  ? console.log("Серії повторюваних елементів немає")
  : console.log("Індекс рядка з найдовшою серією: " + index);

// Обчислення добутку елементів у рядках без від'ємних елементів
let productArrayWithoutNegativeElementsInRows = matrix
  .filter((row) => row.every((el) => el >= 0)) // Вибираємо рядки без від'ємних значень
  .map((row) => row.reduce((product, el) => product * el, 1)); // Обчислюємо добуток у рядку

console.log(
  "Добуток елементів у рядках без від’ємних елементів: ",
  productArrayWithoutNegativeElementsInRows
);

// Функція для видалення стовпців із матриці
function removeColsFromMatrix(matrix, colsToRemove) {
  return matrix.map((row) =>
    row.filter((_, index) => !colsToRemove.includes(index))
  );
}

// Функція для обчислення сум у стовпцях матриці
function getColSumsInMatrix(matrix) {
  const sumsArray = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let j = 0; j < cols; j++) {
    let sum = 0;
    for (let i = 0; i < rows; i++) {
      sum += matrix[i][j]; // Додаємо елементи у стовпці
    }
    sumsArray.push(sum);
  }
  return sumsArray;
}

// Функція для отримання суми елементів у стовпцях без від'ємних елементів
function getSumArrayWithoutNegativeElementsInCols(matrix) {
  const colsToRemove = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      if (matrix[i][j] < 0) {
        // Якщо знайдений від'ємний елемент, виключаємо стовпець
        colsToRemove.push(j);
        break;
      }
    }
  }

  const updatedMatrix = removeColsFromMatrix(matrix, colsToRemove); // Видаляємо стовпці
  return getColSumsInMatrix(updatedMatrix);
}

console.log(
  "Сума елементів у стовпцях без від’ємних елементів: ",
  getSumArrayWithoutNegativeElementsInCols(matrix)
);
