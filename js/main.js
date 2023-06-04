//Creamos array par aguardar los productos

const productos = [
    {
        id: "zapatillas-hombres-01",
        titulo: "zapatillas 01",
        imagen: "./img/hombres/01.webp",
        categoria: {
            nombre: "Hombres",
            id: "hombres"
        },
        precio: 1500
    },
    {
        id: "zapatillas-hombres-02",
        titulo: "zapatillas 02",
        imagen: "./img/hombres/02.webp",
        categoria: {
            nombre: "Hombres",
            id: "hombres"
        },
        precio: 1200
    },
    {
        id: "zapatillas-hombres-03",
        titulo: "zapatillas 03",
        imagen: "./img/hombres/03.webp",
        categoria: {
            nombre: "Hombres",
            id: "hombres"
        },
        precio: 2000
    },
    {
        id: "zapatillas-hombres-04",
        titulo: "zapatillas 04",
        imagen: "./img/hombres/04.webp",
        categoria: {
            nombre: "Hombres",
            id: "hombres"
        },
        precio: 800
    },
    {
        id: "zapatillas-mujer-01",
        titulo: "zapatillas 01",
        imagen: "./img/mujeres/01.webp",
        categoria: {
            nombre: "Mujeres",
            id: "mujeres"
        },
        precio: 1200
    },
    {
        id: "zapatillas-mujer-02",
        titulo: "zapatillas 02",
        imagen: "./img/mujeres/02.webp",
        categoria: {
            nombre: "Mujeres",
            id: "mujeres"
        },
        precio: 900
    },
    {
        id: "zapatillas-niño-01",
        titulo: "zapatillas 01",
        imagen: "./img/niños/01.webp",
        categoria: {
            nombre: "Niños",
            id: "niños"
        },
        precio: 600
    },
    {
        id: "zapatillas-niño-02",
        titulo: "zapatillas 02",
        imagen: "./img/niños/02.webp",
        categoria: {
            nombre: "Niños",
            id: "niños"
        },
        precio: 500
    }
]

//Llamamos los elementos del HTML

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesSecciones = document.querySelectorAll(".boton-seccion");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");


//Funcion para cargar los productos de forma dinamica
function cargarProductos(productosDeLaSeccion) {
    contenedorProductos.innerHTML = "";
//Recorremos un forEach creando productos con la informacion de los objetos producto
    productosDeLaSeccion.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button id="${producto.id}" class="producto-agregar">Agregar</button>
        </div>
        `;
// Cargamos los elementos creados en el HTML
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);


//Añadimos eventos a los botones de secciones
botonesSecciones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesSecciones.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productoSeccion = productos.find((producto) => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoSeccion.categoria.nombre;
            const productosDeSeccion = productos.filter((producto) => producto.categoria.id === e.currentTarget.id);
            
        cargarProductos(productosDeSeccion);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

// Funcion para que los botones de los productos tengan evento de agregar
function actualizarBotonesAgregar() {
     botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

// inicializamos variable y traemos lo que está en el LS
let productosEnCarrito;
let productosEnCarritoLocalStorage = localStorage.getItem("productos-carrito");

if(productosEnCarritoLocalStorage){
    productosEnCarrito = JSON.parse(productosEnCarritoLocalStorage);
}else{
    productosEnCarrito = [];
}

// Funcion que agrega producto al carrito, sumando la cantidad y subiendo al LS
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    let productoAgregado = productos.find((producto) => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const posicion = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[posicion].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    //Cargamos al local storage

    localStorage.setItem("productos-carrito", JSON.stringify(productosEnCarrito));
}
