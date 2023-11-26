document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/user")  // Изменил путь на /api/user
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(user => {
            // Проверка, что user - это объект
            if (typeof user !== 'object') {
                throw new Error('Invalid JSON response');
            }

            console.log(user);

            document.getElementById("username").textContent = user.username;
            document.getElementById("userId").textContent = user.id;
            document.getElementById("userEmail").textContent = user.email;
        })
        .catch(error => console.error("Error fetching user:", error));
});
