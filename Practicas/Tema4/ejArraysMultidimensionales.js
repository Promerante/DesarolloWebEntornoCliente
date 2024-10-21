function ej15() {
  do {
    var N = parseFloat(
      prompt("Introduce numero entero positivo N mayor a 2 y menor que 5")
    );
  } while (!(N > 2 && N < 5 && Number.isInteger(N)));
  const array = [];
  for (let i = 0; i <N; i++) {
    array[i] = [];
    for (let j = 0; j < N; j++) {
      array[i].push();//FALTA ARREGLAR ESTO PARA HACER BIEN LA TABLA
    }
  }
  console.log(array);
}
