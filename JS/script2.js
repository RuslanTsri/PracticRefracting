// Отримуємо всі div з класом "table"
let divTags = document.querySelectorAll("div.table");

divTags.forEach(div => {
    // Отримуємо всі таблиці в поточному div
    div.querySelectorAll("table").forEach(table => {
        // Отримуємо всі елементи <td> у таблиці
        let tdElements = table.querySelectorAll("td");

        // Якщо немає <td>, пропускаємо таблицю
        if (tdElements.length === 0) return;

        // Проходимо через всі <td>, починаючи з другого, з кроком 2
        tdElements.forEach((td, index) => {
            if (index % 2 !== 0) {
                td.classList.add("selected");
            }
        });
    });
});
