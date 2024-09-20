
function crearYcargarDatosPerfil() {
    
    const perfilDatosDiv = document.createElement('div');
    perfilDatosDiv.className = 'perfil-datos';


    const nombreP = document.createElement('p');
    nombreP.innerHTML = '<strong>Nombre:</strong> <span id="nombrePerfil"></span>';
    perfilDatosDiv.appendChild(nombreP);

    const apellidoP = document.createElement('p'); 
    apellidoP.innerHTML = '<strong>Apellido:</strong> <span id="apellidoPerfil"></span>'; 
    perfilDatosDiv.appendChild(apellidoP);

    const emailP = document.createElement('p');
    emailP.innerHTML = '<strong>Email:</strong> <span id="emailPerfil"></span>';
    perfilDatosDiv.appendChild(emailP);

    
    document.querySelector('main').appendChild(perfilDatosDiv);

    
    cargarDatosPerfil();
}

// Cargar los datos registrados desde el localStorage
function cargarDatosPerfil() {
    const nombre = localStorage.getItem('nombre') || 'Nombre no disponible';
    const apellido = localStorage.getItem('apellido') || 'Apellido no disponible';
    const email = localStorage.getItem('email') || 'Email no disponible';

    document.getElementById('nombrePerfil').textContent = nombre;
    document.getElementById('apellidoPerfil').textContent = apellido;
    document.getElementById('emailPerfil').textContent = email;
}

// Footer
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

    
    footer.appendChild(parrafoFooter);
}


window.onload = function() {
    crearYcargarDatosPerfil();
    crearFooter();
};
