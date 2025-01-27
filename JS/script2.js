// Отримуємо всі div з класом "table"
let divTags = document.querySelectorAll("div.table");

// Проходимо через кожен div
divTags.forEach(div => {
    // Отримуємо всі таблиці в поточному div
    div.querySelectorAll("table").forEach(table => {
        // Отримуємо всі елементи td в таблиці
        let tdElements = table.querySelectorAll("td");

        // Проходимо через всі td, починаючи з другого, з кроком 2
        for (let i = 1; i < tdElements.length; i += 2) {
            // Додаємо клас "selected" до кожного другого td
            tdElements[i].className = "selected";
        }
    });
});
