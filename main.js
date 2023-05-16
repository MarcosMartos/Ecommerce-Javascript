//****************************************** PRE-ENTEREGA 2******************************************* */

//Clase constructora Productos

class Productos{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }

        vender(){
            this.vendido = true;
        }
}

//Productos

const remera = new Productos("remera", 6000);
const campera = new Productos("campera", 12000);
const pantalon = new Productos("pantalon", 8000);
const zapatos = new Productos("zapatos", 30000);
const corbata = new Productos("corbata", 4000);
const saco = new Productos("saco", 16000);
const medias = new Productos("medias", 2500);
const gorra = new Productos("gorra", 4500);
const camisa = new Productos("camisa", 5000);
const pollera = new Productos("pollera", 3000);

//Arreglo para guardar productos

const arrayProductos = [];

//Cargar productos

arrayProductos.push(remera);
arrayProductos.push(campera);
arrayProductos.push(pantalon);
arrayProductos.push(zapatos);
arrayProductos.push(corbata);
arrayProductos.push(saco);
arrayProductos.push(medias);
arrayProductos.push(gorra);
arrayProductos.push(camisa);
arrayProductos.push(pollera);


//mostramos array

console.log(arrayProductos);

//Mostramos el menú de opciones
  
 function menu() {
    alert('Bienvenido a la tienda RopAncha');
    //Pedimos al usuario elegir una opcion 
    let opcion = parseInt(
      prompt(
        'Ingrese una opción: \n 1) Comprar ropa \n 2) Donar ropa \n 3) Dar de baja \n 4) Salir'
      )
    );
//Retornamos la opcion elegida
    return opcion;
  }

  //Funcion para comprar ropa
 
  function comprar(){
    //Pedimos al usuario el numero de prendas a comprar
    let cantidad = parseInt(prompt("Ingrese la cantidad de prendas a comprar: "));
    //Mostramos el stock de productos
    alert(`Productos en stock \n ${arrayProductos[0].nombre}  \n ${arrayProductos[1].nombre}  \n ${arrayProductos[2].nombre}  \n ${arrayProductos[3].nombre}  \n ${arrayProductos[4].nombre}  \n ${arrayProductos[5].nombre}  \n ${arrayProductos[6].nombre}  \n ${arrayProductos[7].nombre}  \n ${arrayProductos[8].nombre}  \n ${arrayProductos[9].nombre}  \n`);
    //Iniciamos la variable del costo total
    let precioTotal = 0;
    //Repetimos esta accion el n° de veces indicado por el usuario
    for(i = 0; i < cantidad; i++){
      //Pedimos al usuario el nombre de la prenda
      let nombrePrenda = prompt("Ingrese la prenda que desea comprar: ");
      //Verificamos la existencia de la prenda
      let precioPrenda = arrayProductos.find((el) => el.nombre === nombrePrenda);
      //Sumamos el precio de la prenda en la Variable de costo total
      precioTotal += precioPrenda.precio;
    }
    //Mostramos al usuario el costo de su compra
    alert(`El costo final de su compra es de $${precioTotal}`);
  } 
    //Funcion para donar ropa

  function donar(){
    alert("Gracias por donar ropa a nuestra tienda RopAncha :)");
    //Pedimos al usuario el numero de prendas a donar
    let cantidad = parseInt(prompt("Ingrese la cantidad de prendas a donar: "));
    //Repetimos esta accion el n° de veces indicado por el usuario
    for(i = 0; i < cantidad; i++){
      //Pedimos el nombre de la prenda
    let nombreDonacion = prompt("Ingrese el nombre de la prenda que esta donando: ");
    //Pedimos el precio estimado por la prenda
    let precioDonacion = parseInt(prompt("Ingrese el precio de la prenda que esta donando: "));
    //Creamos un nuevo objeto con los datos recibidos por el usuario
    const donacion = new Productos(nombreDonacion, precioDonacion);
    //Agregamos al array el nuevo producto
    arrayProductos.push(donacion);
    }
    //Mostramos el array con los nuevos productos
    console.log(arrayProductos);
    alert("Gracias por su donacion!");
  }


    //Funcion para dar de baja un producto

    function eliminar(){
      let prendaAEliminar = prompt("Ingrese la prenda que quiere dar de baja");
      const arrayActualizado = arrayProductos.filter((prenda) => prenda.nombre != prendaAEliminar);
      console.log(arrayActualizado); 
      alert(`Ya dimos de baja el producto ${prendaAEliminar}`);
    }

   //Funcion para salir

     function salir() {
      alert('Gracias por visitar RopAncha');
    } 

    //Muestro el menu de opciones
  
  let opcion = menu();
  switch (opcion) {
    case 1:
      comprar();
      break;
    case 2:
      donar();
      break;
    case 3:
      eliminar();
      break;
    case 4:
      salir();
      break;
    default:
      alert('Upss. Opción incorrecta, intente con una de las opciones.');
      break;
  }

