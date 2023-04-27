//CONDICIONAL IF
//Programa para determinar la mayoría de edad

const edad = parseInt(prompt("Ingrese su edad: "));

if (edad < 18 && edad > 0){
    alert("Usted es menor de edad, NO puede acceder a este contenido.");
}else if (edad >= 18){
    alert("Bienvenido, usted es mayor de edad.")
}else{
    alert("Vuelva a ingresar su edad.");  
}


//CICLOS FOR Y WHILE
//Entradas para escuchar a Wos y Mini calculadora 

//Entradas para escuchar a Wos (For)
for (let i = 1; i <= 10; i++) {

    let nombre = prompt("Ingrese su nombre");
    alert(`Entrada n° ${i}: ${nombre}.`)
}

alert("Entradas agotadas");


//Mini calculadora (While y Switch)

let num1 = parseInt(prompt("Ingrese un numero: "));
let num2 = parseInt(prompt("Ingrese un segundo numero: "));
let operacion = prompt("Ingrese la operacion que desea realizar: ");
let resultado;

while (operacion != "salir") {
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            alert("La suma es: " + resultado);
            break;

        case "-":
            resultado = num1 - num2;
            alert("La resta es: " + resultado);
            break;

        case "*":
            resultado = num1 * num2;
            alert("La multiplicacion es: " + resultado);
            break;

        case "/":
            resultado = num1 / num2;
            alert("La division es: " + resultado);
            break;
    
        default:
            alert("Error. Ingrese nuevamente la operacion a realizar.");
            break;
    }
        num1 = parseInt(prompt("Ingrese un numero: "));
        num2 = parseInt(prompt("Ingrese un segundo numero: "));
        operacion = prompt("Ingrese la operacion que desea realizar: ");
}

//FUNCIONES
//Cambio de divisa

//Función arrow
let cotizarDolar = pesos => {return dolar = pesos / 500} 

//Llamamos a la funcion arrow
cotizarDolar(parseInt(prompt("Ingrese la cantidad de pesos a cambiar: ")));
alert(`La cantidad de dolares es de $ ${dolar}`);


//Funcion
function cotizarPesos(dolar) {
    pesos = dolar * 500;
    return pesos;
}

//Llamamos a la funcion
cotizarPesos(parseInt(prompt("Ingrese la cantidad de dolares a cambiar: ")));
alert(`La cantidad de pesos es de $ ${pesos}`);
