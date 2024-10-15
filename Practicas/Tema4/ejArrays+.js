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
  let array = [];
  if (array2.length > array1.length) {
    let arrayTemp = array2;
    array2 = array1;
    array1 = arrayTemp;
  } //Con esto deberiamos hacer que siempre array 2 sea el pequeño y el uno el largo
  for (let b = 0; b < array1.length; b++) {
    //Este primer bucle recorre los elementos de la primera array
    let cont = 1; //Seteamos para cada elemento de la primera array un contador con 1
    for (let c = 0; c < array2.length; c++) {
      //Este segundo es el que recorre la segunda array
      if (array1[b] == array2[c]) {
        cont++;
      }
    } //Entonces este recorre con el elemnto b toda la array2 y mira si alguno es igual al elemento b de la array,si lo es, contador sube
    if (cont == 1) {
      array.push(array1[b]);
    } //Si ningun elemento como b es de la array,contador sera 1 y metera el elemento a la array.!!!!Suponemos que array1 es mas grande que el 2!!!
  }
  console.log(array); //POR AHORA NO COMPRUEBA SI EL ULTIMO ELEMENTO de la array 2 es unico y no lo mete a la array
  return array;
}
