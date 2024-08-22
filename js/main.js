// Array de conciertos
const conciertos = [
    { banda: "Municipal Waste", fecha: "2024-09-15", precio: 121000 },
    { banda: "Metallica", fecha: "2024-09-15", precio: 126000 },
    { banda: "The Police", fecha: "2024-10-05", precio: 183000 },
    { banda: "Red Hot Chili Peppers", fecha: "2024-10-12", precio: 140000 },
    { banda: "The Rolling Stones", fecha: "2024-10-20", precio: 225000 },
    { banda: "Municipal Waste", fecha: "2024-11-01", precio: 130000 },
    { banda: "Metallica", fecha: "2024-11-10", precio: 140000 },
    { banda: "The Police", fecha: "2024-11-15", precio: 190000 },
    { banda: "Red Hot Chili Peppers", fecha: "2024-11-20", precio: 150000 },
    { banda: "The Rolling Stones", fecha: "2024-11-25", precio: 230000 },
    { banda: "Municipal Waste", fecha: "2024-12-01", precio: 135000 },
    { banda: "Metallica", fecha: "2024-12-05", precio: 145000 },
    { banda: "The Police", fecha: "2024-12-10", precio: 195000 },
    { banda: "Red Hot Chili Peppers", fecha: "2024-12-15", precio: 155000 },
    { banda: "The Rolling Stones", fecha: "2024-12-20", precio: 235000 },
    { banda: "Municipal Waste", fecha: "2025-01-05", precio: 140000 },
    { banda: "Metallica", fecha: "2025-01-10", precio: 150000 },
    { banda: "The Police", fecha: "2025-01-15", precio: 200000 },
    { banda: "Red Hot Chili Peppers", fecha: "2025-01-20", precio: 160000 },
    { banda: "The Rolling Stones", fecha: "2025-01-25", precio: 240000 }
];

// Función para crear tarjetas de conciertos
function tarjetas(conciertos) {
    const contenedor = document.getElementById('contenedorTarjetas');
    if (contenedor) {
        contenedor.innerHTML = '';

        conciertos.forEach(concierto => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta';

            const nombreBanda = document.createElement('h3');
            nombreBanda.textContent = concierto.banda;

            const fechaConcierto = document.createElement('p');
            fechaConcierto.textContent = "Fecha: " + concierto.fecha;

            const precioConcierto = document.createElement('p');
            precioConcierto.textContent = "Precio: $" + concierto.precio;

            tarjeta.appendChild(nombreBanda);
            tarjeta.appendChild(fechaConcierto);
            tarjeta.appendChild(precioConcierto);

            contenedor.appendChild(tarjeta);
        });
    }
}

// Función para filtrar conciertos
function filtrarConciertos() {
    const filtroBanda = document.getElementById('filtroBanda').value.toLowerCase();
    const filtroFecha = document.getElementById('filtroFecha').value;

    const conciertosFiltrados = conciertos.filter(concierto => {
        const bandaCoincide = concierto.banda.toLowerCase().includes(filtroBanda);
        const fechaCoincide = !filtroFecha || concierto.fecha === filtroFecha;
        return bandaCoincide && fechaCoincide;
    });

    tarjetas(conciertosFiltrados);
}

// Función para limpiar los filtros y mostrar todas las tarjetas
function limpiarFiltros() {
    document.getElementById('filtroBanda').value = '';
    document.getElementById('filtroFecha').value = '';
    tarjetas(conciertos);
}

tarjetas(conciertos);

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
    footer.style.bottom = '0';
    footer.style.width = '100%';
    footer.style.height = '60px';

    // Agrega el párrafo al footer
    footer.appendChild(parrafoFooter);
}

window.onload = footer;

