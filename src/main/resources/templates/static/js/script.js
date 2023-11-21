document.addEventListener("DOMContentLoaded", function () {
    fetch("/admin/users")
        .then(response => response.json())
        .then(users => {
            const tableBody = document.querySelector("#usersTable tbody");

            users.forEach(user => {
                const row = tableBody.insertRow();
                const idCell = row.insertCell(0);
                const usernameCell = row.insertCell(1);
                const passwordCell = row.insertCell(2);
                const emailCell = row.insertCell(3);
                const actionsCell = row.insertCell(4);

                idCell.textContent = user.id;
                usernameCell.textContent = user.username;
                passwordCell.textContent = user.password;
                emailCell.textContent = user.email;

                const editLink = document.createElement("a");
                editLink.href = "/admin/user/" + user.id;
                editLink.className = "btn btn-primary";
                editLink.textContent = "Edit User";

                actionsCell.appendChild(editLink);

                const deleteForm = document.createElement("form");
                deleteForm.method = "POST";
                deleteForm.action = "/admin/delete/" + user.id;
                deleteForm.className = "d-inline";

                const csrfInput = document.createElement("input");
                csrfInput.type = "hidden";
                csrfInput.name = "_csrf";
                csrfInput.value = user.csrf;

                const deleteButton = document.createElement("button");
                deleteButton.type = "submit";
                deleteButton.className = "btn btn-danger";
                deleteButton.textContent = "Delete";

                deleteForm.appendChild(csrfInput);
                deleteForm.appendChild(deleteButton);

                actionsCell.appendChild(deleteForm);
            });
        })
        .catch(error => console.error("Error fetching users:", error));
});
