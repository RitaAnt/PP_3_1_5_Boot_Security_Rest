document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы таблицы
    var userTable = document.getElementById("userTableBody");

    // Запрашиваем данные у сервера
    fetch("/admin/api/users")
        .then(response => response.json())
        .then(users => {
            // Очищаем таблицу
            userTable.innerHTML = "";

            // Заполняем таблицу данными
            users.forEach(user => {
                // Создаем новую строку в таблице
                var row = userTable.insertRow();

                // Добавляем ячейки со свойствами пользователя
                var cellId = row.insertCell(0);
                cellId.innerHTML = user.id;

                var cellUsername = row.insertCell(1);
                cellUsername.innerHTML = user.username;

                var cellPassword = row.insertCell(2);
                cellPassword.innerHTML = user.password;

                var cellEmail = row.insertCell(3);
                cellEmail.innerHTML = user.email;

//
            });
        })
        .catch(error => console.error("Error fetching users:", error));
});
