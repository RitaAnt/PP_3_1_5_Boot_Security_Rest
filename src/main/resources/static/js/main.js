document.addEventListener("DOMContentLoaded", () => {
    const userTable = document.getElementById("userTableBody");

    fetch("/api/admin/users")
        .then(response => response.json())
        .then(users => {
            console.log(users)

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

                var cellEdit = row.insertCell(4);
                cellEdit.innerHTML = `<a class="btn btn-primary" href="/admin/user/${user.id}">Edit</a>`;

                var cellDelete = row.insertCell(5);
                cellDelete.innerHTML = `<form method="POST" action="/admin/delete/${user.id}">
                                          <input type="hidden" name="_method" value="DELETE"/>
                                          <button type="submit" class="btn btn-danger">Delete</button>
                                      </form>`;
            });
        })
        .catch(error => console.error("Error fetching users:", error));
});
