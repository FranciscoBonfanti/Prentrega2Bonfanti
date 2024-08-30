document.addEventListener("DOMContentLoaded", () => {
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const btnRealizarCompra = document.getElementById("btn-realizar-compra");
    const mensajeCompra = document.getElementById("mensaje-compra"); 
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<h2>No hay eventos en el carrito.</h2>";
        btnRealizarCompra.style.display = "none";
        return;
    }

    carrito.forEach((item, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <h3>${item.banda}</h3>
            <p>Fecha: ${item.fecha}</p>
            <p>Precio: $${item.precio.toLocaleString()}</p>
            <button class="boton-lista" onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;

        contenedorCarrito.appendChild(tarjeta);
    });

    btnRealizarCompra.addEventListener("click", () => {
        realizarCompra();
    });
});

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    location.reload();
}

function realizarCompra() {
    localStorage.removeItem("carrito");

    // Mostrar mensaje de compra exitosa
    const mensajeCompra = document.getElementById("mensaje-compra");
    mensajeCompra.textContent = "Compra realizada con éxito.";
    mensajeCompra.style.display = "block";

    // Ocultar carrito y botón de compra
    document.getElementById("contenedor-carrito").style.display = "none";
    document.getElementById("btn-realizar-compra").style.display = "none";
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
    footer.style.bottom = '0';
    footer.style.width = '100%';
    footer.style.height = '60px';

    // Agrega el párrafo al footer
    footer.appendChild(parrafoFooter);
}

// Llama a ambas funciones cuando la página haya cargado
window.onload = function() {
    crearFooter();
};
