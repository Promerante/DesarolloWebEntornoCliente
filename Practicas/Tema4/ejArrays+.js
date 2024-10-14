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
