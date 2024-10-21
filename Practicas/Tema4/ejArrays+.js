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

function ej13(array13) {
  let juego = prompt("Introduce ahora el nombre del juego:");
  alert(`Las puntuaciones del juego ${juego} son las siguientes: ${array13}`);
  for (let a = 1; a <= 3; a++) {
    let min = Math.min(array13);
    for (let b = 0; b < array13.length; b++)
      if (array13[b] == min) {
        array13.splice(b, 1);
      }
  }
  alert(`Las puntuaciones del juego ${juego} son las siguientes: ${array13}`);
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
