//Traemos los productos del LS
let productosEnCarrito = localStorage.getItem("productos-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

//Traemos elementos del HTML
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoAcciones = document.querySelector("#carrito-acciones");
let botonesEliminar = document.querySelectorAll(".producto-carrito-eliminar");
const botonVaciar = document.querySelector(".carrito-acciones-vaciar");
const precioTotal = document.querySelector("#total");
const botonComprar = document.querySelector(".carrito-acciones-comprar");

//Funcion para cargar productos al carrito de compra
function cargarProductosCarrito() {
  //En caso de tener algo, sino mostrar que está vacio
  if (productosEnCarrito && productosEnCarrito.length > 0) {
    carritoVacio.classList.add("oculto");
    carritoProductos.classList.remove("oculto");
    carritoAcciones.classList.remove("oculto");

    carritoProductos.innerHTML = "";

    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      div.innerHTML = `
            <img class="carrito-producto-imagen" src="${
              producto.imagen
            }" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Título</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>SubTotal</small>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button id="${
              producto.id
            }" class="producto-carrito-eliminar"><i class="bi bi-trash-fill"></i></button>
            `;

      carritoProductos.append(div);
    });

    actualizarBotonesEliminar();
    actualizarTotal();
  } else {
    carritoVacio.classList.remove("oculto");
    carritoProductos.classList.add("oculto");
    carritoAcciones.classList.add("oculto");
  }
}

cargarProductosCarrito();

//Funcion para dar evento de eliminar
function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".producto-carrito-eliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
  });

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      Toastify({
        text: "Se eliminó el producto",
        duration: 3000,
        destination: "./carrito.html",
        newWindow: true,
        close: false,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        className: "tarjetaTostify",
        style: {
          background: "linear-gradient(to right, #494949, #242424)",
        },
        onClick: function () {},
      }).showToast();
    });
  });
}

//Funcion que elimina producto y recarga el LS
function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;
  const posicion = productosEnCarrito.findIndex(
    (producto) => producto.id === idBoton
  );
  productosEnCarrito.splice(posicion, 1);

  cargarProductosCarrito();

  localStorage.setItem("productos-carrito", JSON.stringify(productosEnCarrito));
}

//Damos evento al boton para vaciar el carrito
botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
  productosEnCarrito.length = 0;
  localStorage.setItem("productos-carrito", JSON.stringify(productosEnCarrito));
  cargarProductosCarrito();
}

//Funcion que actualiza el precio a pagar
function actualizarTotal() {
  totalPrecio = productosEnCarrito.reduce(
    (acum, producto) => acum + producto.precio * producto.cantidad,
    0
  );
  precioTotal.innerText = `$${totalPrecio}`;
}

//Damos evento al boton para vaciar el carrito una vez se compra
botonComprar.addEventListener("click", () => {
  Swal.fire({
    title: "Comprado!",
    text: "Gracias por tu compra",
    icon: "success",
    confirmButtonText: "Listo",
  });

  comprarCarrito();
});

function comprarCarrito() {
  productosEnCarrito.length = 0;
  localStorage.setItem("productos-carrito", JSON.stringify(productosEnCarrito));

  carritoVacio.classList.remove("oculto");
  carritoProductos.classList.add("oculto");
  carritoAcciones.classList.add("oculto");
}
