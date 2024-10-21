function ej8(array) {
  let array2 = [];
  let suma = 0;
  for (let q = 0; q < array.length; q++) {
    array2.push((suma += array[q]));
  }
  console.log(array2);
  return array2;
}
function countBy(x, y) {
  let array = [];
  if ((x, (y) => 0)) {
    for (let a = 1; a <= y; a++) {
      array.push(x * a);
    }
  }
  console.log(array);
  return array;
}

function ej11() {
  let txt = prompt("Introduce el texto a revertir:");
  let inicio = prompt("Ahora introduce la palabra que quieras meter:");
  array = txt.split(" ");
  array.unshift(array.reverse(), inicio);
  alert(array);
}

function ej12(array1, array2) {
  let array = array1.concat(array2); //Tendra la union de los 2 arrays
  var arrayFinal = [];
  for (let i = 0; i < array.length; i++) {
    let cont = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        cont++;
      }
    } //Entonces cada elemento recorrera todos los elementos de la array unida si alguno es igual el contador sube.
    if (cont == 1) {
      arrayFinal.push(array[i]);
    }
  }
  console.log(arrayFinal);
  return arrayFinal;
}

function creaArraysNum() {
  let array = [];
  let elemento;
  let cont = 1;
  do {
    elemento = parseFloat(
      prompt(
        "Introduce un número como elemento " +
          cont +
          " ,si no lo es terminara de pedir*"
      )
    );
    array.push(elemento);
    if (!Number.isInteger(array[cont - 1])) {
      array.pop();
    }
    cont++;
  } while (Number.isInteger(elemento));
  return array;
}

function ej13(array13) {
  let juego = prompt("Introduce ahora el nombre del juego:");
  alert(`Las puntuaciones del juego ${juego} son las siguientes: ${array13}`);
  array13.sort();
  for (let i = 1; i <= 3; i++) {
    array13.shift();
  }
  alert(`Las puntuaciones del juego ${juego} son las siguientes: ${array13}`);//PASO 1
  for (let i = 1; i <= 3; i++) {
    elemento = parseFloat(
      prompt(`Introduce la puntuacion que entrará en la posición ${i * 2}`)
    );
      array13.splice(i * 2, 0, elemento);
    if (!Number.isInteger(array13[i * 2])) {
      array13.splice(i * 2, 1);
      i--;
    }
  }
  alert(`Las puntuaciones del juego ${juego} son las siguientes: ${array13}`);//PASO2
  do{
    noAdmitido=false;
    var posicion=parseFloat(prompt("Introduce desde que posicion quieres empezar a borrar"));
    if(posicion>(array13.length-1)|| posicion<0){//Controlamos si la posicion que da esta entre el 0 y la posicion mas grande posible
      alert("La posicion dada no es valida.")
      noAdmitido=true;
    }
    var cantidad=parseFloat(prompt("Introduce la cantidad de elementos que quieres borrar"));
    if(cantidad<0){
      alert(`Dada la posicion ${posicion}, la cantidad no es valida`)
      noAdmitido=true;
    }
  }while(noAdmitido);
  array13.splice(posicion,cantidad);
  alert(`Las puntuaciones del juego ${juego} son las siguientes: ${array13}`)//PASO 3
}
