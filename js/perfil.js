// Función para crear y cargar los datos del perfil
function crearYcargarDatosPerfil() {
    // Crear el contenedor de perfil
    const perfilDatosDiv = document.createElement('div');
    perfilDatosDiv.className = 'perfil-datos';

    // Crear y añadir los elementos de nombre, email y teléfono
    const nombreP = document.createElement('p');
    nombreP.innerHTML = '<strong>Nombre:</strong> <span id="nombrePerfil"></span>';
    perfilDatosDiv.appendChild(nombreP);

    const emailP = document.createElement('p');
    emailP.innerHTML = '<strong>Email:</strong> <span id="emailPerfil"></span>';
    perfilDatosDiv.appendChild(emailP);

    const telefonoP = document.createElement('p');
    telefonoP.innerHTML = '<strong>Teléfono:</strong> <span id="telefonoPerfil"></span>';
    perfilDatosDiv.appendChild(telefonoP);

    // Insertar el contenedor en el DOM
    document.querySelector('main').appendChild(perfilDatosDiv);

    // Cargar los datos del localStorage
    cargarDatosPerfil();
}

// Función para cargar los datos registrados desde el localStorage
function cargarDatosPerfil() {
    const nombre = localStorage.getItem('nombre') || 'Nombre no disponible';
    const email = localStorage.getItem('email') || 'Email no disponible';
    const telefono = localStorage.getItem('telefono') || 'Teléfono no disponible';

    document.getElementById('nombrePerfil').textContent = nombre;
    document.getElementById('emailPerfil').textContent = email;
    document.getElementById('telefonoPerfil').textContent = telefono;
}

// Función para crear el footer
function crearFooter() {
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

// Llama a ambas funciones cuando la página haya cargado
window.onload = function() {
    crearYcargarDatosPerfil();
    crearFooter();
};
