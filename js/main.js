// Array de conciertos
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

// Función para crear el carousel
function crearCarousel() {
    const carouselContainer = document.getElementById('carouselContainer');
    if (!carouselContainer) return;

    // Array de imágenes para el carousel
    const imagenes = [
        { src: "./img/img-guns.jpg", alt: "Guns N' Roses" },
        { src: "./img/image.png", alt: "Imagen 2" },
        { src: "./img/img-rammstein.jpg", alt: "Rammstein" }
    ];

    // Crear elementos del carousel
    const carousel = document.createElement('div');
    carousel.className = 'carousel slide carousel-small';
    carousel.setAttribute('data-bs-ride', 'carousel');

    const innerCarousel = document.createElement('div');
    innerCarousel.className = 'carousel-inner';

    imagenes.forEach((imagen, index) => {
        const item = document.createElement('div');
        item.className = `carousel-item ${index === 0 ? 'active' : ''}`;

        const img = document.createElement('img');
        img.className = 'd-block w-100';
        img.src = imagen.src;
        img.alt = imagen.alt;

        item.appendChild(img);
        innerCarousel.appendChild(item);
    });

    const controlPrev = document.createElement('a');
    controlPrev.className = 'carousel-control-prev';
    controlPrev.setAttribute('href', '#carouselExampleControls');
    controlPrev.setAttribute('role', 'button');
    controlPrev.setAttribute('data-bs-slide', 'prev');

    const prevIcon = document.createElement('span');
    prevIcon.className = 'carousel-control-prev-icon';
    prevIcon.setAttribute('aria-hidden', 'true');

    const prevText = document.createElement('span');
    prevText.className = 'visually-hidden';
    prevText.textContent = 'Previous';

    controlPrev.appendChild(prevIcon);
    controlPrev.appendChild(prevText);

    const controlNext = document.createElement('a');
    controlNext.className = 'carousel-control-next';
    controlNext.setAttribute('href', '#carouselExampleControls');
    controlNext.setAttribute('role', 'button');
    controlNext.setAttribute('data-bs-slide', 'next');

    const nextIcon = document.createElement('span');
    nextIcon.className = 'carousel-control-next-icon';
    nextIcon.setAttribute('aria-hidden', 'true');

    const nextText = document.createElement('span');
    nextText.className = 'visually-hidden';
    nextText.textContent = 'Next';

    controlNext.appendChild(nextIcon);
    controlNext.appendChild(nextText);

    carousel.appendChild(innerCarousel);
    carousel.appendChild(controlPrev);
    carousel.appendChild(controlNext);

    carouselContainer.appendChild(carousel);
}

// Función para crear el footer
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

// Llamar a las funciones al cargar la página
window.onload = () => {
    footer(); 
    crearCarousel(); 
    tarjetas(conciertos);
};
