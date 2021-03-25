// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  //tengo que hacer un array de arrays a partir de un objeto
  var arrayDeArrays = []
  var arrayAcumulador = []

  for (let clave in objeto) {

    arrayAcumulador.push(clave, objeto[clave])
    arrayDeArrays.push(arrayAcumulador)
    arrayAcumulador = []

  }

  return arrayDeArrays


}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objReturn = {}

  for (let a in string) { //recorre cada letra index del string, que se transforma en letra con string[a]


    if (objReturn[string[a]] === undefined) { objReturn[string[a]] = 1 } //si esta indefinido lo agrega, con la clave segun la }}letra y el numero 1

    else objReturn[string[a]] += 1  //NO esta indefnidino, entonces le suma 1 a el valor de la clave y lo guarda en la clave



  }

  return objReturn//retorna el objeto




}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí jajaj que hdps
  var parteEnMinuscula = ""
  var parteEnMayuscula = ""

  for (let a in s) {

    if (esMayuscula(s[a])) { parteEnMayuscula += s[a] } //si es minuscula va para un lado y si es mayuscula para otro
    else { parteEnMinuscula += s[a] }
  }



  function esMayuscula(letra) {
    return letra === letra.toUpperCase()
  }


  return parteEnMayuscula + parteEnMinuscula

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  //hago una variable acumuladora, cuando llega a un espacio la agrega invertida a otra variable final y la deja en cero
  var acumuladorDePalarbas = "";
  var fraseFinalRetornada = "";

  for (let a in str) {

    //si la letra es igual a un espacio agrega a la salida la palabra acumulada invertida, y borra la palabra acumulada para reutilizarla
    if (str[a] === " ") {
      fraseFinalRetornada += invertirPalabra(acumuladorDePalarbas) + " ";
      acumuladorDePalarbas = "";
    }



    else { //si el caracter es una letra, entonces lo acumula. Si ademas de ser una letra, es la ultima, agrega la palabra a la salida
      acumuladorDePalarbas += str[a];
      if (parseInt(a, 10) === str.length - 1) { fraseFinalRetornada += invertirPalabra(acumuladorDePalarbas) }
    }

  }

  function invertirPalabra(palabra) {
    var salida = "";
    for (let a in palabra) {
      salida += palabra[palabra.length - a - 1];
    }

    return salida;
  }

  return fraseFinalRetornada



}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí


  var numString = numero.toString()

  for (let a in numString) {

    if (!(numString[a] === numString[numString.length - 1 - a])) return "No es capicua"

  }

  return "Es capicua"


}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var stringLimpiado = ""
  for (let a in cadena) {

    if (!(cadena[a] === "a" || cadena[a] === "b" || cadena[a] === "c"))
      stringLimpiado += cadena[a]

  }

  return stringLimpiado



}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí


  return arr.sort((a, b) => a.length - b.length)

  //sino pordia hacer una funcion map que me arme un arreglo con los indices, y ordenarlo haciendo iteraciones.

}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
//intercectar es ver que valores se repiten en uno y en otro

var arrayDeIntersecciones=[]

arreglo1.forEach(function(elemento1){


arreglo2.forEach(function(elemento2){

if(elemento1===elemento2) arrayDeIntersecciones.push(elemento2)


})



})

return arrayDeIntersecciones

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

