document.addEventListener("DOMContentLoaded", () => {
    // Получите идентификатор пользователя из текущего URL, предположим, что он в конце URL.
    const userId = window.location.pathname.split("/").pop();

    fetch(`/api/admin/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            console.log(user);

            // Обновление текстовых данных
            document.getElementById("username").innerText = user.username;
            document.getElementById("userId").innerText = user.id;
            document.getElementById("userEmail").innerText = user.email;

            // Обновление ссылки и действия формы (если они используются)
            const editButton = document.getElementById("editButton");
            if (editButton) {
                editButton.href = `/admin/user/${user.id}/edit`;
            }

            const deleteForm = document.getElementById("deleteForm");
            if (deleteForm) {
                deleteForm.action = `/admin/delete/${user.id}`;
            }
        })
        .catch(error => console.error("Error fetching user:", error));
});
