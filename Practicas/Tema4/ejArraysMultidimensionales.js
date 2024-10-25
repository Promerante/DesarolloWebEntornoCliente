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
      array[i].push(N * (cont + 1));
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
function ej17() {
  do {
    var N = parseFloat(
      prompt("Introduce numero entero positivo N mayor a 2 y menor que 5")
    );
  } while (!(N >= 2 && N <= 5 && Number.isInteger(N)));
  let array = [];
  for (let i = 1; i <= N; i++) {
    array[i] = [];
    for (let j = 1; j <= N; j++) {
      array[i].push(parseInt(Math.random() * (20 - 1) + 1));
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
}

function ej18() {
  let adn = prompt("Introduce la cadena de ADN:").toUpperCase();
  let adnArray = adn.split("");
  console.log(adnArray);
  let arn = "";
  for (let i = 0; i < adnArray.length; i++) {
    if (adnArray[i] == "T") {
      arn += "U";
    } else {
      arn += adnArray[i];
    }
  }
  alert(`La cadena de ADN: ${adn}, tiene como arn de salida ${arn}`);
}
function ej19() {
  let entrada = ["Luis", "Estela", "Ángel", "Enya", "Jose Antonio", "Facu"];
  let salida = [];
  for (let i = 0; i < entrada.length; i++) {
    if (entrada[i].length == 4) {
      salida.push(entrada[i]);
    }
  }
  console.log(salida);
}
function ej20() {
  let colores = [
    "red",
    "yellow",
    "green",
    "white",
    "blue",
    "brown",
    "pink",
    "black",
  ];
  let array = [];
  for (let i = 1; i <= 8; i++) {
    array.push(prompt(`Introduzca la palabra número ${i}`));
  }
  console.log(array);
  let ordenada = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < colores.length; j++) {
      if (array[i] == colores[j]) {
        ordenada.push(array[i]);
        array.splice(i, 1);
        i--;
      }
    }
  } //Con esto recorremos la array y borramos el que sea color y la metemos en otra ordenada para luego reintroducirlos.
  //OJO: NOTESE EL "i--" PORQUE EN EL CASO DE QUE PASE LA CONDICIONAL BORRAMOS UN ELEMENTO, SI NO ESTUVIERA SE SALTARIA UN ELEMENTO.
  ordenada = ordenada.concat(array);
  console.log(ordenada);
}
function likes(array) {
  switch (array.length) {
    case 0:
      console.log("No one like this.");
      break;
    case 1:
      console.log(`${array[0]} likes this`);
      break;
    case 2:
      console.log(`${array[0]} and ${array[1]} like this`);
      break;
    case 3:
      console.log(`${array[0]} , ${array[1]} and ${array[2]} like this`);
      break;
    default: //4 o mas
      console.log(
        `${array[0]} , ${array[1]} and ${array.length - 2} like this`
      );
      break;
  }
}
function ej22() {
  let array = [];
  let num;
  let cont = 1;
  do {
    num = parseInt(prompt(`Introduzca el elemento ${cont}:`));
    array.push(num);
    cont++;
    if (!(num >= 0 && num <= 99 && Number.isInteger(num))) {
      array = [];
      cont = 1;
      num = 1;
    }
  } while (num >= 0 && num <= 99 && Number.isInteger(num) && cont <= 10);
  let ind = [];
  for (let i = 0; i < 10; i++) {
    ind.push(i);
  }
  let array22 = [ind, array];
  console.log(array22); //PASO 1
  //Esto en forma de array,si queremos poner lo de "Indice valor" tendriamos que convertilo a String
  //y gestionar los espacios si el valor es mayor que 9
  let inicio;
  let final;
  do {
    inicio = parseInt(prompt("Introduce el inicio:"));
    final = parseInt(prompt("Introduce el final:"));
    if (
      !(
        inicio < 10 &&
        inicio >= 0 &&
        final < 10 &&
        final >= 0 &&
        final > inicio &&
        Number.isInteger(inicio) &&
        Number.isInteger(final)
      )
    ) {
      let inicio = 1;
      let final = 2;
    }
  } while (
    !(
      inicio < 10 &&
      inicio >= 0 &&
      final < 10 &&
      final >= 0 &&
      final > inicio &&
      Number.isInteger(inicio) &&
      Number.isInteger(final)
    )
  );
  //PASO 2
  let arrayCambiado = []; //OJO:HACEMOS UNA COPIA PARA VER LOS CAMBIOS EN CONSOLA
  let arrayReordenado = [ind, arrayCambiado];
  let temp=array[inicio];
  for (let i = 0; i < array.length; i++) {
    if (i > inicio && i < final) {
      arrayCambiado[i] = array[i];
    } else if (i != 0) {
      arrayCambiado[i] = array[i - 1];
    } else {
      arrayCambiado[i] = array[array.length - 1];
    }
  }
  //Guardamos los valores a intercambiar en variables temporales
  arrayCambiado.splice(final,1,temp);

  console.log(arrayReordenado);
}
