//Не показывает роли

// Получение CSRF-токена и заполнение скрытого поля
var csrfToken = document.querySelector('meta[name="_csrf"]').content;
document.getElementById('csrfToken').value = csrfToken;

// Получение ролей и заполнение контейнера rolesContainer
var rolesContainer = document.getElementById('rolesContainer');
var listRoles = /* ваш массив ролей на JavaScript */ [];

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

// Функция для отправки формы
function submitForm() {
    document.getElementById('userForm').submit();
}
