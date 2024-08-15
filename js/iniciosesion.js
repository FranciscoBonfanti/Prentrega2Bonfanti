
let loginContainer = document.querySelector('#loginContainer');

let form = document.createElement('form');
form.id = 'loginForm';

// formulario
let inputs = [
    { label: 'Email:', type: 'email', id: 'email', autocomplete: 'email' },
    { label: 'Contraseña:', type: 'password', id: 'contrasenia', autocomplete: 'current-password' }
];

inputs.forEach(inputData => {
    let label = document.createElement('label');
    label.setAttribute('for', inputData.id);
    label.textContent = inputData.label;

    let input = document.createElement('input');
    input.type = inputData.type;
    input.id = inputData.id;
    input.required = true;
    input.autocomplete = inputData.autocomplete;

    form.appendChild(label);
    form.appendChild(input);
});

// botón de envío
let submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Iniciar Sesión';
form.appendChild(submitButton);


loginContainer.appendChild(form);

// funcionalidad al formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();
 
    let emailInput = document.querySelector('#email').value;
    let contraseniaInput = document.querySelector('#contrasenia').value;
    
    let storedEmail = localStorage.getItem("email");
    let storedContrasenia = localStorage.getItem("contrasenia");
    let storedNombre = localStorage.getItem("nombre");
    
    if (emailInput === storedEmail && contraseniaInput === storedContrasenia) {
        alert("¡Bienvenido " + storedNombre + "!");
        window.location.href = "../index.html"; // Redirigir a la página de inicio
    } else {
        alert("Correo electrónico o contraseña incorrectos.");
    }
});

