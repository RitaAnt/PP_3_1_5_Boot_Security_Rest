document.addEventListener("DOMContentLoaded", () => {
    const userTable = document.getElementById("userTableBody");

    fetch("/api/admin/users")
        .then(response => response.json())
        .then(users => {

            userTable.innerHTML = "";

            users.forEach(user => {
                var row = userTable.insertRow();

                var cellId = row.insertCell(0);
                cellId.innerHTML = user.id;

                var cellUsername = row.insertCell(1);
                cellUsername.innerHTML = user.username;

                var cellPassword = row.insertCell(2);
                cellPassword.innerHTML = user.password;

                var cellEmail = row.insertCell(3);
                cellEmail.innerHTML = user.email;

                var cellRoles = row.insertCell(4);
                cellRoles.innerHTML = user.roles.map(role => role.name).join(', ');

                var cellEdit = row.insertCell(5);
                cellEdit.innerHTML = `<a class="btn btn-primary" href="/api/admin/user/${user.id}/edit">Edit</a>`;

                var cellDelete = row.insertCell(6);
                cellDelete.innerHTML = `<button type="button" class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>`;
            });
        })
        .catch(error => console.error("Error fetching users:", error));
});

function deleteUser(userId) {
    if (confirm("Are you sure you want to delete this user?")) {
        fetch(`/api/admin/users/${userId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    // Refresh the user table after successful deletion
                    document.dispatchEvent(new Event('DOMContentLoaded'));
                } else {
                    console.error("Failed to delete user:", response.statusText);
                }
            })
            .catch(error => console.error("Error deleting user:", error));
    }
}
