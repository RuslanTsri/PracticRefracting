// Отримуємо всі div з класом "table"
let divTags = document.querySelectorAll("div.table");

// Проходимо через кожен div
divTags.forEach(div => {
    // Отримуємо всі таблиці в поточному div
    div.querySelectorAll("table").forEach(table => {
        // Отримуємо всі елементи td в таблиці
        let tdElements = table.querySelectorAll("td");

        // Проходимо через всі td, починаючи з другого, з кроком 2
        tdElements.forEach((td, index) => {
            if (index % 2 !== 0) td.classList.add("selected");
        });
    });
});
