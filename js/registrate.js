// Seleccionar el contenedor donde se generará el formulario
let formContainer = document.querySelector('#formContainer');

// Crear el formulario
let form = document.createElement('form');
form.id = 'registerForm';

// Crear y agregar los campos de entrada al formulario
let inputs = [
    { label: 'Nombre:', type: 'text', id: 'nombre' },
    { label: 'Apellido:', type: 'text', id: 'apellido' },
    { label: 'Email:', type: 'email', id: 'email' },
    { label: 'Contraseña:', type: 'password', id: 'contrasenia', autocomplete: 'new-password' },
    { label: 'Confirmar Contraseña:', type: 'password', id: 'confirmarContrasenia', autocomplete: 'new-password' }
];

inputs.forEach(inputData => {
    let label = document.createElement('label');
    label.setAttribute('for', inputData.id);
    label.textContent = inputData.label;

    let input = document.createElement('input');
    input.type = inputData.type;
    input.id = inputData.id;
    input.required = true;

    form.appendChild(label);
    form.appendChild(input);
});

// Crear y agregar el botón de envío
let submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Registrarse';
form.appendChild(submitButton);

// Agregar el formulario al contenedor
formContainer.appendChild(form);

// Agregar funcionalidad al formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores de los inputs
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let email = document.querySelector('#email').value;
    let contrasenia = document.querySelector('#contrasenia').value;

    // Guardar en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("email", email);
    localStorage.setItem("contrasenia", contrasenia);

    // Mostrar un mensaje de bienvenida
    alert("¡En horabuena! Bienvenido " + nombre);

});

// Confirmar la contraseña
form.addEventListener("input", () => {
    let contrasenia = document.querySelector('#contrasenia').value;
    let confirmarContrasenia = document.querySelector('#confirmarContrasenia').value;

    if (contrasenia !== confirmarContrasenia) {
        document.querySelector('#confirmarContrasenia').setCustomValidity("Las contraseñas no coinciden");
    } else {
        document.querySelector('#confirmarContrasenia').setCustomValidity("");
    }
});
