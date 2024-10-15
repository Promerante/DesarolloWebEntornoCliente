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
  } //Siempre array 2 será el pequeño y 1 el largo.
  for (let b = 0; b < array1.length; b++) {
    let cont = 1;
    for (let c = 0; c < array2.length; c++) {
      if (array1[b] == array2[c]) {
        cont++;
      }
    } //Entonces este recorre con el elemnto b toda la array2 y mira si alguno es igual al elemento b de la array,si lo es, contador sube
    if (cont == 1) {
      array.push(array1[b]);
    } //Si ningun elemento como b es de la array,contador sera 1 y metera el elemento a la array
    if (cont == 1 && array1.length == array2.length) {
      array.push(array2[b]);
    }
  } //OJO:HAY QUE METER ESTE CONDICIONAL POR SI ARRAY2 ES DE MISMA LONGITUD,SI NO EL ULTIMO ELEMENTO DE array2 AUNQUE SEA UNICO JAMAS LO METE
  alert(array);
  return array;
}

function ej13(array13) {
  let juego=prompt("Introduce ahora el nombre del juego:");
  alert(`Las puntuaciones del juego ${juego} son las siguientes: ${array13}`);
  for(let a=1;a<=3;a++){
    let min=Math.min(array13);
    for(let b=0;b<array13.length;b++)
      if(array13[b]==min){
        array13.splice(b,1);
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
