document.addEventListener("DOMContentLoaded", () => {
    fetch('../eventos.json')
        .then(response => response.json())
        .then(eventos => {
            const eventosDisponibles = filtrarEventosDisponibles(eventos);
            mostrarEventos(eventosDisponibles);
        })
        .catch(error => console.error('Error al cargar los eventos:', error));
});

function filtrarEventosDisponibles(eventos) {
    const fechaActual = new Date();
    return eventos.filter(evento => new Date(evento.fecha) >= fechaActual);
}

function mostrarEventos(eventos) {
    const contenedorEventos = document.getElementById('contenedorEventos'); 
    contenedorEventos.style.display = 'flex';
    contenedorEventos.style.flexWrap = 'wrap';
    contenedorEventos.style.justifyContent = 'center';
    contenedorEventos.style.gap = '16px'; 

    eventos.forEach((evento, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <h3>${evento.banda}</h3>
            <p>Fecha: ${evento.fecha}</p>
            <button id="boton-agregar-${index}" class="boton-agregar" onclick="agregarAlCarrito('${evento.banda}', '${evento.fecha}', ${evento.precio}, ${index})">Agregar al carrito</button>
            <p id="mensaje-agregado-${index}" class="mensaje-agregado" style="display:none; color: green;">Agregado al carrito</p>
        `;

        contenedorEventos.appendChild(tarjeta);
    });
}



function agregarAlCarrito(nombre, fecha, precio, index) {
    const evento = { banda: nombre, fecha: fecha, precio: precio };
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(evento);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    const botonAgregar = document.getElementById(`boton-agregar-${index}`);
    const mensajeAgregado = document.getElementById(`mensaje-agregado-${index}`);
    
    botonAgregar.style.display = 'none';  
    mensajeAgregado.style.display = 'block';  
}


//Footer

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
    footer.style.borderBlockStart = '0.5px solid white';
    footer.style.bottom = '0';
    footer.style.width = '100%';
    footer.style.height = '60px';

    
    footer.appendChild(parrafoFooter);
}

window.onload = function() {
    crearFooter();
};