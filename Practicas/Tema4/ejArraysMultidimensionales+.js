function ej23() {
  let mesas;
  do {
    mesas = parseInt(
      prompt("Para empezar introduzca cúantas mesas tiene el restaurante")
    );
  } while (mesas < 0 || !Number.isInteger(mesas));
  let restaurante = [];
  for (i = 0; i < mesas; i++) {
    restaurante[i] = parseInt(Math.random() * 4);
  }
  do {
    let num;
    let bucle;
    mostrarRestaurante(restaurante);
    num = parseInt(prompt("Buenas, introduzca cuántos sois"));
    if (num > 4) {
      alert(
        `Lo siento no admitimos grupos de ${num} haga grupos de 4 como maximo e intentelo de nuevo`
      );
      bucle = true;
    } else if (num < 0) {
      alert("Genial,el restaurante ha cerrado");
      bucle = false;
    } else if (!Number.isInteger(num)) {
      alert("Porfavor,introduzca un número");
      bucle = true;
    } else {
        

        bucle = true;
    }
  } while (bucle);
}

function mostrarRestaurante(array) {
  let txt = "Estado de las mesas: ";
  for (i = 0; i < array.length; i++) {
    txt += array[i] + " ";
  }
  alert(txt);
}
