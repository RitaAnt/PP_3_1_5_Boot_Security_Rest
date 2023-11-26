//Работает корректно по ссылке api/admin/users/${userId}
//Работает не корректно по ссылке api/user

document.addEventListener("DOMContentLoaded", () => {

    const userId = window.location.pathname.split("/").pop();

    fetch(`/api/admin/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            console.log(user);


            document.getElementById("username").innerText = user.username;
            document.getElementById("userId").innerText = user.id;
            document.getElementById("userEmail").innerText = user.email;


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
