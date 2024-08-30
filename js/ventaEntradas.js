// Array de conciertos actualizado
const conciertos = [
    { banda: "Municipal Waste", fecha: "2024-09-15", precio: 121000 },
    { banda: "Metallica", fecha: "2024-09-15", precio: 126000 },
    { banda: "The Police", fecha: "2024-10-05", precio: 183000 },
    { banda: "Nirvana", fecha: "2024-10-12", precio: 140000 },
    { banda: "Rammstein", fecha: "2024-10-20", precio: 225000 },
    { banda: "Municipal Waste", fecha: "2024-11-01", precio: 130000 },
    { banda: "Metallica", fecha: "2024-11-10", precio: 140000 },
    { banda: "The Police", fecha: "2024-11-15", precio: 190000 },
    { banda: "Nirvana", fecha: "2024-11-20", precio: 150000 },
    { banda: "Rammstein", fecha: "2024-11-25", precio: 230000 },
    { banda: "Municipal Waste", fecha: "2024-12-01", precio: 135000 },
    { banda: "Metallica", fecha: "2024-12-05", precio: 145000 },
    { banda: "The Police", fecha: "2024-12-10", precio: 195000 },
    { banda: "Nirvana", fecha: "2024-12-15", precio: 155000 },
    { banda: "Rammstein", fecha: "2024-12-20", precio: 235000 },
    { banda: "Municipal Waste", fecha: "2025-01-05", precio: 140000 },
    { banda: "Metallica", fecha: "2025-01-10", precio: 150000 },
    { banda: "The Police", fecha: "2025-01-15", precio: 200000 },
    { banda: "Nirvana", fecha: "2025-01-20", precio: 160000 },
    { banda: "Rammstein", fecha: "2025-01-25", precio: 240000 }
];

const contenedorEventos = document.querySelector('main');

// Crear tarjetas de eventos
conciertos.forEach(concierto => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    const banda = document.createElement('h3');
    banda.textContent = concierto.banda;
    tarjeta.appendChild(banda);

    const fecha = document.createElement('p');
    fecha.textContent = `Fecha: ${concierto.fecha}`;
    tarjeta.appendChild(fecha);

    const precio = document.createElement('p');
    precio.textContent = `Precio: $${concierto.precio.toLocaleString()}`;
    tarjeta.appendChild(precio);

    const botonAgregar = document.createElement('button');
    botonAgregar.textContent = 'Agregar al carrito';
    botonAgregar.classList.add('boton-agregar');
    tarjeta.appendChild(botonAgregar);

    // Elemento para mostrar el mensaje
    const mensaje = document.createElement('p');
    mensaje.classList.add('mensaje');
    mensaje.style.color = 'green'; 
    mensaje.style.display = 'none'; 
    tarjeta.appendChild(mensaje);

    contenedorEventos.appendChild(tarjeta);

    // Añadir evento para agregar al carrito
    botonAgregar.addEventListener('click', () => {
        agregarAlCarrito(concierto, mensaje);
    });
});

// Función para agregar concierto al carrito
function agregarAlCarrito(concierto, mensajeElement) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(concierto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    mensajeElement.textContent = `${concierto.banda} agregado al carrito.`;
    mensajeElement.style.display = 'block';
}

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
    footer.style.bottom = '0';
    footer.style.width = '100%';
    footer.style.height = '60px';

    footer.appendChild(parrafoFooter);
}

window.onload = footer;
