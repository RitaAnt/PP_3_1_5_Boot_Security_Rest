document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/roles")
        .then(response => response.json())
        .then(roles => {
            var rolesContainer = document.getElementById('rolesContainer');
            roles.forEach(role => {
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = 'roles';
                checkbox.id = 'roleCheckbox' + role.id;
                checkbox.value = role.id;
                checkbox.classList.add('form-check-input');

                var label = document.createElement('label');
                label.htmlFor = 'roleCheckbox' + role.id;
                label.classList.add('form-check-label');
                label.innerText = role.name;

                // Change the container class for each checkbox and label to form-check
                var formCheck = document.createElement('div');
                formCheck.classList.add('form-check');
                formCheck.appendChild(checkbox);
                formCheck.appendChild(label);

                rolesContainer.appendChild(formCheck);
            });
        })
        .catch(error => console.error("Error fetching roles:", error));
});

function submitForm() {
    document.getElementById('userForm').submit();
}