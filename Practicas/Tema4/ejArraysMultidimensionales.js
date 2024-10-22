function ej15() {
  do {
    var N = parseFloat(
      prompt("Introduce numero entero positivo N mayor a 2 y menor que 5")
    );
  } while (!(N > 2 && N < 5 && Number.isInteger(N)));
  const array = [];
  let cont = 0;
  for (let i = 1; i <= N; i++) {
    array[i] = [];
    for (let j = 1; j <= N; j++) {
      array[i].push(N * (cont + 1)); //FALTA ARREGLAR ESTO PARA HACER BIEN LA TABLA
      cont++;
    }
  }
  array.shift();
  let txt = "";
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] <= 9) {
        txt += "0" + array[i][j] + " ";
      } else {
        txt += array[i][j] + " ";
      }
    }
    txt += "\n";
  }
  console.log(txt);
  return array;
}
function ej16(array) {
  let sumatorio = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      sumatorio += array[i][j];
    }
  }
  console.log(sumatorio);
  return sumatorio;
}
