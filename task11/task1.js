const form = document.createElement('form');
form.classList.add('create-user-form');

const label1 = document.createElement('label');
label1.textContent = 'Имя';
const input1 = document.createElement('input');
input1.type = 'text';
input1.name = 'userName';
input1.placeholder = 'Введите ваше имя';
label1.appendChild(input1);

const label2 = document.createElement('label');
label2.textContent = 'Пароль';
const input2 = document.createElement('input');
input2.type = 'password';
input2.name = 'password';
input2.placeholder = 'Придумайте Пароль';
label2.appendChild(input2);

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Подтвердить';

form.appendChild(label1);
form.appendChild(label2);
form.appendChild(button);

document.body.appendChild(form);