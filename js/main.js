
// array de conciertos
const conciertos = [
    { banda: "Municipal Waste", fecha: "2024-09-15", precio: 121000 },
    { banda: "Metallica", fecha: "2024-09-15", precio: 126000 },
    { banda: "The police", fecha: "2024-10-05", precio: 183000 },
    { banda: "Red Hot Chili Peppers", fecha: "2024-10-12", precio: 140000 },
    { banda: " The Rolling Stones", fecha: "2024-10-20", precio: 225000 },
    { banda: "Municipal Waste", fecha: "2024-11-01", precio: 130000 },
    { banda: "Metallica", fecha: "2024-11-10", precio: 140000 },
    { banda: "The police", fecha: "2024-11-15", precio: 190000 },
    { banda: "Red Hot Chili Peppers", fecha: "2024-11-20", precio: 150000 },
    { banda: " The Rolling Stones", fecha: "2024-11-25", precio: 230000 },
    { banda: "Municipal Waste", fecha: "2024-12-01", precio: 135000 },
    { banda: "Metallica", fecha: "2024-12-05", precio: 145000 },
    { banda: "The police", fecha: "2024-12-10", precio: 195000 },
    { banda: "Red Hot Chili Peppers", fecha: "2024-12-15", precio: 155000 },
    { banda: " The Rolling Stones", fecha: "2024-12-20", precio: 235000 },
    { banda: "Municipal Waste", fecha: "2025-01-05", precio: 140000 },
    { banda: "Metallica", fecha: "2025-01-10", precio: 150000 },
    { banda: "The police", fecha: "2025-01-15", precio: 200000 },
    { banda: "Red Hot Chili Peppers", fecha: "2025-01-20", precio: 160000 },
    { banda: " The Rolling Stones", fecha: "2025-01-25", precio: 240000 }
];



// función para crear tarjetas de conciertos
function tarjetas(conciertos) {
    const contenedor = document.getElementById('contenedorTarjetas');
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


// función para filtrar conciertos
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

// función para limpiar los filtros y mostrar todas las tarjetas
function limpiarFiltros() {
    document.getElementById('filtroBanda').value = '';
    document.getElementById('filtroFecha').value = '';
    tarjetas(conciertos);
}

// inicializar la página con todas las tarjetas
tarjetas(conciertos);

