document.addEventListener('DOMContentLoaded', function() {
    initializeSortSelect();
});


const comprar = async (pid) => {
    let inputCart = document.getElementById("cart");
    let cid = inputCart.value;
    console.log(`Producto con id ${pid}, Carrito ${cid}`);

    let response = await fetch(`/api/carts/${cid}/products/${pid}`, {
        method: "post"
    });

    if (response.status === 200) {
        let datos = await response.json();
        mostrarMensajeProductoAgregado(); // Mostrar el mensaje de producto agregado
    }
}


function initializeSortSelect() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function (event) {
            const selectedOption = event.target.value;
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('sort', selectedOption);
            window.location.href = currentUrl.toString();
        });
    }
}

// Función para mostrar el mensaje de producto agregado
function mostrarMensajeProductoAgregado() {
    var mensaje = document.getElementById("productoAgregadoMensaje");
    mensaje.style.display = "block"; // Muestra el mensaje
    setTimeout(function() {
        mensaje.style.display = "none"; // Oculta el mensaje después de 3 segundos
    }, 3000);
}


