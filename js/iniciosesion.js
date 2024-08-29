let loginContainer = document.querySelector('#loginContainer');

// Crear formulario
let form = document.createElement('form');
form.id = 'loginForm';

// Estilos para el formulario
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.width = '300px';
form.style.margin = '0 auto';
form.style.padding = '20px';
form.style.border = '1px solid #d6c583';
form.style.borderRadius = '8px';
form.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

// Datos de los inputs
let inputs = [
    { label: 'Email:', type: 'email', id: 'email', autocomplete: 'email' },
    { label: 'Contraseña:', type: 'password', id: 'contrasenia', autocomplete: 'current-password' }
];

inputs.forEach(inputData => {
    let label = document.createElement('label');
    label.setAttribute('for', inputData.id);
    label.textContent = inputData.label;
    label.style.marginBottom = '5px';
    label.style.fontSize = '1rem';
    label.style.color = '#d6c583';

    let input = document.createElement('input');
    input.type = inputData.type;
    input.id = inputData.id;
    input.required = true;
    input.autocomplete = inputData.autocomplete;
    input.style.padding = '10px';
    input.style.marginBottom = '15px';
    input.style.borderRadius = '4px';
    input.style.fontSize = '1rem';

    form.appendChild(label);
    form.appendChild(input);
});

// Botón de envío
let submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Iniciar Sesión';
submitButton.style.padding = '10px';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '4px';
submitButton.style.backgroundColor = '#d6c583';
submitButton.style.color = 'white';
submitButton.style.fontSize = '1rem';
submitButton.style.cursor = 'pointer';

form.appendChild(submitButton);

// Agregar el formulario al contenedor
loginContainer.appendChild(form);

// Funcionalidad al formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let emailInput = document.querySelector('#email').value;
    let contraseniaInput = document.querySelector('#contrasenia').value;

    let storedEmail = localStorage.getItem("email");
    let storedContrasenia = localStorage.getItem("contrasenia");
    let storedNombre = localStorage.getItem("nombre");

    if (emailInput === storedEmail && contraseniaInput === storedContrasenia) {
        alert("¡Bienvenido " + storedNombre + "!");
        window.location.href = "../index.html"; 
    } else {
        alert("Correo electrónico o contraseña incorrectos.");
    }
});

// Crear el footer
function footer() {
    const footer = document.getElementById('footer');

    const parrafoFooter = document.createElement('p');

    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.toLocaleString('default', { month: 'long' });
    const anio = fechaActual.getFullYear();

    const fechaFormateada = `${dia} de ${mes} de ${anio}`;

    parrafoFooter.innerHTML = `Rock Wave | Los mejores eventos al mejor precio. | ${fechaFormateada} |`;

    parrafoFooter.style.padding = '15px';
    parrafoFooter.style.textAlign = 'center';
    parrafoFooter.style.fontSize = '1.1rem';
    parrafoFooter.style.color = 'white';
    parrafoFooter.style.borderBlockStart = '0.5px solid white';
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.width = '100%';
    footer.style.height = '60px';

    // Agregar el párrafo al footer
    footer.appendChild(parrafoFooter);
}

window.onload = footer;
