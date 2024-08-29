document.addEventListener("DOMContentLoaded", () => {
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const btnRealizarCompra = document.getElementById("btn-realizar-compra");
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p>No hay eventos en el carrito.</p>";
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
    alert("Compra realizada con éxito.");
    location.reload(); 
}

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