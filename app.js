/*document funciona como un puente entre el .html y el .js (h1 en html aparece como titulo)
querySelector es la funcion/ método que permite acceder a cada uno de los elementos
let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto"

let parrafo = document.querySelector ("p");
parrafo.innerHTML = "Escribe un número del 1 al 10";

function verificarIntento() {
    alert ("Click desde el botón");
}
*/


/* --------------mismo ejercicio pero optimizado---------------
function asignarTextoElemento (eLemento, texto) {
    let elementoHTML = document.querySelector(eLemento); //titulo --- h1
    elementoHTML.innerHTML = texto; // titulo.innerHTML ---- Juego del número secreto
}

function verificarIntento() {
    alert ("Click desde el botón");
}
               //elemento en HTML   //Texto que yo necesito que diga
asignarTextoElemento ("h1", "Juego del número secreto!");
asignarTextoElemento ("p", "Escribe un número del 1 al 10");
*/

/*-------------Mismo ejercicio (ya optimizado) pero con numero secreto aleatorio generado por la PC--------------
//tambien aprendiste a poner identificadores en HTML y cambiar el querySelector por getElementById

let numeroSecreto = generarNumeroSecreto ()

function asignarTextoElemento (eLemento, texto) {
    let elementoHTML = document.querySelector(eLemento); //titulo --- h1
    elementoHTML.innerHTML = texto; // titulo.innerHTML ---- Juego del número secreto
    return; //se coloca solo por buena práctica
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value); //en HTML pusiste un identificador (id)
    //colocaste parseINT porque el usuario tira un string y hay que volverlo numero entero
    console.log (typeof (numeroSecreto));
    console.log (numeroSecreto); //lo quitaste de arriba y lo colocaste aqui para que los datos en consola esten juntos
    console.log (typeof(numeroDeUsuario));
    console.log (numeroDeUsuario);
    console.log (numeroSecreto === numeroDeUsuario); //en la consola nos dira True si ambos son iguales, de lo contrario False
    //el triple igual dicta que ambos datos tienen que ser igual tanto como valor como tipo de dato (ambos son strings o numeros)
    return;
}

function generarNumeroSecreto() {   //aqui usaste el function statement (genera la estructura del function)
    return Math.floor(Math.random() * 10) + 1;
}
               //elemento en HTML   //Texto que yo necesito que diga
asignarTextoElemento ("h1", "Juego del número secreto!");
asignarTextoElemento ("p", "Escribe un número del 1 al 10");
*/





/*---------Mismo ejercicio que el anterior (pusiste una funcion dentro de otra funcion = if con asignarTextoElemento)----------
// dejaste mas limpio el código al eliminar varios console.log
// también agregaste si acertó el número secreto y en cuantos intentos lo logró
// tambien colocaste una función para que la caja del numeroDeUsuario se borre automaticamente cada vez que se juegue
// habilitaste el boton de Nuevo Juego solo si el usuario acierta el numero secreto (pero no se puede jugar aún)

let numeroSecreto = generarNumeroSecreto ()
let intentos = 1;
console.log (numeroSecreto) //lo pusiste aqui para probar si a la primera vez que aciertas sale "vez"

function asignarTextoElemento (eLemento, texto) {
    let elementoHTML = document.querySelector(eLemento); //titulo --- h1
    elementoHTML.innerHTML = texto; // titulo.innerHTML ---- Juego del número secreto
    return; //se coloca solo por buena práctica
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value); //en HTML pusiste un identificador (id)

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
        document.getElementById ("reiniciar").removeAttribute ("disabled") //disabled es el atributo en .HTML
        //con removeAttribute ("disabled") logramos que el boton Nuevo juego se active solo si el usuario acertó el numeroSecreto
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor')
        }
        intentos ++;
        limpiarCajaAuto(); //aqui llamamos la función para que se ejecute
    }
    return;
}

function limpiarCajaAuto () {  //esta funcion es para que no tengamos que borrar el numero cada vez que juguemos
    document.getElementById ("valorUsuario").value = ""
}

function generarNumeroSecreto() {   //aqui usaste el function statement (genera la estructura del function)
    return Math.floor(Math.random() * 10) + 1;
}
               //elemento en HTML   //Texto que yo necesito que diga
asignarTextoElemento ("h1", "Juego del número secreto!");
asignarTextoElemento ("p", "Escribe un número del 1 al 10");
*/





/*-----Mismo ejercicio (función Reiniciar juego; en el ejercicio anterior solo habilitaste el boton Nuevo Juego)
let numeroSecreto = 0 //aqui e intentos colocaste 0 ya que abajo las function ya harian el dato aleatorio y conteo desde 1
let intentos = 0;

function asignarTextoElemento (eLemento, texto) {
    let elementoHTML = document.querySelector(eLemento); //titulo --- h1
    elementoHTML.innerHTML = texto; // titulo.innerHTML ---- Juego del número secreto
    return; //se coloca solo por buena práctica
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value); //en HTML pusiste un identificador (id)

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
        document.getElementById ("reiniciar").removeAttribute ("disabled") //disabled es el atributo en .HTML
        //con removeAttribute ("disabled") logramos que el boton Nuevo juego se active solo si el usuario acertó el numeroSecreto
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor')
        }
        intentos ++;
        limpiarCajaAuto(); //aqui llamamos la función para que se ejecute
    }
    return;
}

function limpiarCajaAuto () {  //esta funcion es para que no tengamos que borrar el numero cada vez que juguemos
    document.getElementById ("valorUsuario").value = "";
}

function generarNumeroSecreto() {   //aqui usaste el function statement (genera la estructura del function)
    return Math.floor(Math.random() * 10) + 1;
}

function condicionesInicioJuego() {  //moviste aqui el asignarTextoElemento para meter esta funcion dentro de function reiniciarJuego
                   //elemento en HTML   //Texto que yo necesito que diga
asignarTextoElemento ("h1", "Juego del número secreto!");
asignarTextoElemento ("p", "Escribe un número del 1 al 10");
numeroSecreto = generarNumeroSecreto ();
intentos = 1;
}

function reiniciarJuego() {
    //para esta funcion necesitamos limpiar el numero en la caja que usa el usuario
    limpiarCajaAuto();
    //tambien necesitamos que aparezcan las condiciones para el inicio del juego
    //que se genere otro numero aleatorio
    //y re-iniciar el conteo de intentos
    condicionesInicioJuego();
    //tambien debemos deshabilitar el boton de nuevo juego
    document.getElementById ("reiniciar").setAttribute ("disabled", "true")
}

condicionesInicioJuego(); //aqui lamamos a la función para que se ejecute
*/





//-----Mismo ejercicio que el anterior pero más arreglado-----
let numeroSecreto = 0 //aqui e intentos colocaste 0 ya que abajo las function ya harian el dato aleatorio y conteo desde 1
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo  = 10; //con esto podemos variar el juego si queremos que el numero sea mas que del 1 al 10

function asignarTextoElemento (eLemento, texto) {
    let elementoHTML = document.querySelector(eLemento); //titulo --- h1
    elementoHTML.innerHTML = texto; // titulo.innerHTML ---- Juego del número secreto
    return; //se coloca solo por buena práctica
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value); //en HTML pusiste un identificador (id)

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
        document.getElementById ("reiniciar").removeAttribute ("disabled") //disabled es el atributo en .HTML
        //con removeAttribute ("disabled") logramos que el boton Nuevo juego se active solo si el usuario acertó el numeroSecreto
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor')
        }
        intentos ++;
        limpiarCajaAuto(); //aqui llamamos la función para que se ejecute
    }
    return;
}

function limpiarCajaAuto () {  //esta funcion es para que no tengamos que borrar el numero cada vez que juguemos
    document.getElementById ("valorUsuario").value = "";
}

function generarNumeroSecreto() {   //aqui usaste el function statement (genera la estructura del function)
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; //en lugar de 10 colocaste numeroMaximo
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
//si ya sorteamos todos los numeros podemos cerrar el juego
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya te sorteamos todos los números posibles')
    } else {
      if (listaNumerosSorteados.includes(numeroGenerado)) {  //el .includes busca si el numero ya fue usado
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push (numeroGenerado) //esto es para que el numero secreto no se repita otra vez
            return numeroGenerado;
        }
    }
}

function condicionesInicioJuego() {  //moviste aqui el asignarTextoElemento para meter esta funcion dentro de function reiniciarJuego
                   //elemento en HTML   //Texto que yo necesito que diga
asignarTextoElemento ("h1", "Juego del número secreto!");
asignarTextoElemento ("p", `Escribe un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

function reiniciarJuego() {
    //para esta funcion necesitamos limpiar el numero en la caja que usa el usuario
    limpiarCajaAuto();
    //tambien necesitamos que aparezcan las condiciones para el inicio del juego
    //que se genere otro numero aleatorio
    //y re-iniciar el conteo de intentos
    condicionesInicioJuego();
    //tambien debemos deshabilitar el boton de nuevo juego
    document.getElementById ("reiniciar").setAttribute ("disabled", "true")
}

condicionesInicioJuego(); //aqui lamamos a la función para que se ejecute





/*-----Desafio (funciones)-------

//1 Crear una función que muestre "¡Hola, mundo!" en la consola.
function mostrarSaludo () {
    console.log ("¡Hola mundo!");
}
mostrarSaludo();

//2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mostrarSaludoUsuario (nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
mostrarSaludoUsuario("Angelo");

// 3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function numeroDoble (numero) {
    return numero * 2
}

let resultadoNumeroDoble = numeroDoble (3);
console.log (resultadoNumeroDoble)

// 4 Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularPromedio (numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;
}
let promedio = calcularPromedio (1,2,3);
console.log (promedio)


// 5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function encontrarMayor(a, b) {
    return a > b ? a : b;
}
let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

//6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiplicarloPorElMismo (n1) {
    return n1 * n1
}
let resultado = multiplicarloPorElMismo (7);
console.log (resultado)
*/





/*----------Desafio (template strings) (REPASA bastante este desafio)--------------
1 Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura
//en metros y peso en kilogramos, que se recibirán como parámetros.

function IMC (altura, peso) {
    let IMC = peso / (altura * altura);
    return IMC;
}

//2 Crea una función que calcule el valor del factorial de un número pasado como parámetro. (Copiaste el código, estudialo)

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);


//3 Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
//(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
//Para esto, considera la cotización del dólar igual a R$4,80.

function convertidor (dolares) {
    let cotizacionDolar = 4.80;
    let reales = dolares * cotizacionDolar;
    return reales;
}

//4 Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
//utilizando la altura y la anchura que se proporcionarán como parámetros. (Copiaste el código)

function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let altura = 3; // en metros
  let anchura = 5; // en metros
  calcularAreaYPerimetroRectangular(altura, anchura);


//5 Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14. (Copiaste el código)

function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let radio = 4; // en metros
  calcularAreaYPerimetroCircular(radio);


//6 Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);

*/





/*Desafio (Arrays o Listas)
//1 Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica)



//2 Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin" , "Python"]
console.log (lenguajesDeProgramacion)



//3 Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
let lenguajesDeProgramacion2 = ["JavaScript", "C", "C++", "Kotlin" , "Python"]
lenguajesDeProgramacion2.push ("Java", "Ruby", "GoLang")
console.log (lenguajesDeProgramacion2)



//4 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
mostrarLenguagesSeparadamente();



//5 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
mostrarLenguagesReversoSeparadamente();



//6 Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);



//7 Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);



//8 Crea una función que devuelva la suma de todos los elementos en una lista.
function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numeros = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeros);
  console.log('Suma:', suma);



//9 Crea una función que devuelva la posición en la lista donde se encuentra 
//un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
*/