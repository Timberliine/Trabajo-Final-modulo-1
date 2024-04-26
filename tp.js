/* 1. Convertir una cadena de texto a formato de título:
Crear una función que reciba una frase (string) y devuelva la misma frase con el formato de título, donde la primera letra de cada palabra está en mayúscula y el resto en minúscula.
● Ejemplo: Si la entrada es “mi amigo me invitó a comer”, la salida debería ser “Mi
Amigo Me Invitó A Comer”.
● Ayuda: Los strings entienden una función “toLowerCase()” que convierte la primera letra del texto en mayúscula. Además, se espera que se resuelva con algún ciclo (exacto
o inexacto) y utilizando la función anteriormente mencionada.
*/


function convertirTextoEnTitulo(frase) {
  
  frase = frase.toLowerCase();

  var palabras = frase.split(" ");
  // El .split se utiliza para separar las palabras de la frase
  
  for (var i = 0; i < palabras.length; i++) {
    var palabra = palabras[i];
    palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    //La explicacion rapida es que .chart devuelvo la primer letra, el uppercase te la hace mayuscula y el slice en 1 es que pones lo demas de la palabra sin la primer letra
  }
  return palabras.join(" ");
  //El .join es para unificar todas las palabras en la frase
}
var frase = "boca campeon de la liga";
console.log (convertirTextoEnTitulo(frase));
//borrar anotaciones personales



/*2. Concatenar elementos de un array con un separador personalizado:
Crear una función que reciba un array de strings y un separador, y devuelva una sola cadena de texto que contenga todos los elementos del array concatenados con el separador especificado.
● Ejemplo: Si la entrada es ["Hola", "Mundo", "JavaScript"] y el separador “-”, la salida debería ser "Hola-Mundo-JavaScript"
*/

function concatenarLaFrase(fraseC, separador) {
  return fraseC.join(separador);
}

var fraseC = ["lakers", "en", "siete"];
var separador = "-";
console.log(concatenarLaFrase(fraseC, separador));
//sencillo



/* 3. Revertir las palabras de una frase:
Crear una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
● Ejemplo: Si la entrada es "JavaScript es divertido", la salida debería ser “divertido es
JavaScript”
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se encuentre un espacio en blanco se habrá encontrado una palabra. Cada palabra podría ser insertada en un array (¿para qué?)
*/

function darVueltaLasPalabras(frasee) {

  var palabras2 = frasee.split(" ");
  var palabrasInvertidas = [];
  
  for (var i = palabras2.length - 1; i >= 0; i--) {
      palabrasInvertidas.push(palabras2[i]);
  }
  var fraseeInvertida = palabrasInvertidas.join(" ");
  return fraseeInvertida;
}
console.log(darVueltaLasPalabras("si no me dejan mid trolleo"));

/*4. Contar la cantidad de veces que aparece una palabra en una cadena:
Crear una función que reciba una cadena de texto y una palabra, y devuelva la cantidad de veces que aparece esa palabra en la cadena.
● Ejemplo: Si la entrada es "El sol brilla y el cielo está despejado.", y la palabra que se quiere buscar es “el”, la salida debería ser el número 2.
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se encuentre un espacio en blanco se habrá encontrado una palabra. Cuando se tenga una palabra, se la podrá comparar con la palabra buscada y si coincide … (siga usted!)
*/

function contarLasPalabrasRepetidas(cadena, palabraBuscada){
  var palabras3=cadena.split(" ");
  var contador=0;

  for(var i=0; i<palabras3.length; i++){
    if(palabras3[i]==palabraBuscada){
      contador++;
    }
  }
  return contador;
}
console.log("la cantidad de veces que aparece la palabra repetida es "+ contarLasPalabrasRepetidas("sin curry los gsw no no no no son nada no ganan nada", "no"));

/*5. Comprobar si una cadena de texto termina con un determinado sufijo:
Crear una función que reciba una cadena de texto y un sufijo, y devuelva true si la cadena termina con ese sufijo, false en caso contrario.
● Ejemplo: Si la entrada es "JavaScript es un lenguaje de programación" y se pretende saber si termina con “ción”, debería devolver true.
● Ayuda: Se espera que el ejercicio se resuelva con ciclos inexactos.
*/

function cadenaTerminaConSufijo(cadena2, sufijo){

  //puedo crear dos variables para recorrer toda la cadena y el ultimo sufijo volviendo pa atras
  var recorroCadena=cadena2.length-1;
  var recorroSufijo=sufijo.length-1;

  while (recorroSufijo>=0){
    if (cadena2[recorroCadena] !== sufijo[recorroSufijo]){
      return false;
    }
    recorroCadena--;
    recorroSufijo--;
  }

  return true;
//funco de orto, repasar textos
}
console.log(cadenaTerminaConSufijo("menos charla mas accion", "cion"));

/*6. Eliminar los espacios en blanco al inicio y final de una cadena:
Crear una función que reciba una cadena de texto y elimine los espacios en blanco al inicio y final de la misma.
● Ejemplo: Si la entrada es " JavaScript es divertido “, la salida debería ser "JavaScript es divertido".
● Ayuda: Se sugiere utilizar un ciclo exacto para recorrer toda la frase y que cada vez que se encuentre un caracter no “vacío” (espacio) se lo considere para la nueva palabra “sin espacios”. Si se le busca la vuelta, se puede reutilizar la función del punto 2.
*/

function eliminarEspaciosVacios(laFrase){
return laFrase.trim();
}
console.log(eliminarEspaciosVacios(" lakers en siete "));

/* 7. Extraer el dominio de una dirección de correo electrónico:
Crear una función que reciba una dirección de correo electrónico y devuelva únicamente el dominio de la misma.
● Ejemplo: Si la entrada es “jhondoe@ahk.com.ar”, la salida debería ser “ahk.com.ar”
*/

function extraerElDominioDelMail(mail){
  var separar=mail.split("@");
  var elDominio=separar[1];
  return elDominio;
}
console.log(extraerElDominioDelMail("mitoramirez@ahk.com.ar"));

/*8. Combinar dos arrays alternando sus elementos:
Crear una función que reciba dos arrays y devuelva un nuevo array con los elementos de ambos arrays combinados alternativamente.
● Ejemplo: Si la entrada fueran los arrays [1, 2, 3] y ['a', 'b', 'c', ‘d’], la salida debería ser [1,‘a’, 2, ‘b’, 3, ‘c’, ‘d’]
*/

function combinarLosArrays(primerArray, segundoArray){
  
  var tercerArray=[];
  var contador1=0;
  var contador2=1;

  for(var i=0; i<primerArray.length; i++){
    if(contador1<contador2){
      tercerArray.push(primerArray[i]);
      contador1 ++;
    }

    if (contador1==contador2){
      tercerArray.push(segundoArray[i]);
      contador2++;
    }
  }

  return tercerArray;
}
var primerArray= [3,30,14,13];
var segundoArray=[8,7,8,33];

console.log(combinarLosArrays(primerArray, segundoArray));


/*9. Calcular impuestos:
Desarrollar una función que permita conocer los impuestos que debe abonar una persona dada su edad y sus ingresos mensuales. Los impuestos a abonar por una persona entre 18 y 20 años es un 10% de los ingresos; las personas entre 21 y 30 deben abonar 15% de los ingresos; y todo el resto un 40%. Los menores de edad no abonan impuestos.
● Ejemplo: Si la entrada fuera la edad 18 e ingreso 1000, la salida esperada debería ser 100.
*/

function saberImpuestos(edad, ingreso){
  let impuesto;

  if (edad<18){
    impuesto=0;
  }
    if (edad>=18 && edad<=20){
      impuesto= ingreso*0.1;
    }
    if (edad>=21 && edad<=30){
      impuesto= ingreso*0.15;
    }
    if (edad>30){
      impuesto=ingreso*0.4;
    }
  

    return impuesto;
}

console.log("los impuestos que se deben pagar son: "+saberImpuestos("24", "880000"));

/*10. Resumen de cantidad de likes:
Desarrollar una función que, dada una cantidad numérica de likes, devuelva un texto informativo de la cantidad de likes en formato de “K” para miles y “M” para millones.
● Ejemplo: Si la entrada fuera 1400, la salida debería ser “1.4K”; o si la entrada fuera “34567” la salida debería ser “34.5K”.
*/

function resumenDeLikes(cantidad){
  
  if (cantidad<1000){
    return cantidad;
    // Leer apunte que descargaste de toFix, sirve para redondear el número según sea necesario y devuelve una cadena, no un número. Si el número tiene menos dígitos que los especificados en el argumento de toFixed(), se agregan ceros a la derecha. Si el número tiene más dígitos, se redondea según la regla estándar de redondeo.
    //probar otro metodo
    // tambien se puede hacer sin el toFix xd
  }
  if (cantidad>=1000 && cantidad<1000000){
    return (cantidad/1000)+"K";
  }
  if(cantidad>=1000000){
    return(cantidad/1000000).toFixed(1)+"M";
  }
}

console.log(resumenDeLikes(1333));
console.log(resumenDeLikes(33333));
console.log(resumenDeLikes(3));
console.log(resumenDeLikes(3333333));

//BORRAR LAS ANOTACIONES 