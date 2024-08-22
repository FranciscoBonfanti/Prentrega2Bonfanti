
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


// crear el footer
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

    // Agrega el párrafo al footer
    footer.appendChild(parrafoFooter);
}

window.onload = footer;