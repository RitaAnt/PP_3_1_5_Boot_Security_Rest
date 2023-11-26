//Не показывает роли


var csrfToken = document.querySelector('meta[name="_csrf"]').content;
document.getElementById('csrfToken').value = csrfToken;


var rolesContainer = document.getElementById('rolesContainer');
var listRoles = [];

listRoles.forEach(function (role) {
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

    rolesContainer.appendChild(checkbox);
    rolesContainer.appendChild(label);
});

function submitForm() {
    document.getElementById('userForm').submit();
}
