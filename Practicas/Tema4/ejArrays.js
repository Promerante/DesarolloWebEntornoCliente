function sumaArrays() {
  alert("Introduce 5 numeros:");
  let array = [];
  var total = 0;
  for (var i = 0; i < 5; i++) {
    array[i] = parseFloat(prompt("Introduce el numero " + (i + 1)));
    if (!Number.isInteger(array[i])) {
      alert("Introduce un numero!");
      i--;
    } else {
      total += array[i];
    }
  }
  alert("El total es " + total);
  return array;
}

function maxArrays() {
  var array2 = sumaArrays();
  let max = 0;
  for (let j = 0; j < array2.length; j++) {
    if (max < array2[j]) {
      max = array2[j];
    }
  }
  alert("Y el maximo es " + max);
}
function contarElementos(sumaArrays) {
  let num;
  let contador = 0;
  while (!Number.isInteger(num)) {
    num = parseFloat(prompt("Ahora escribe el numero que quieres buscar:"));
    if (!Number.isInteger(num)) {
      alert("Escriba un numero!");
    }
  }
  for (let k = 0; k < sumaArrays.length; k++) {
    if (num == sumaArrays[k]) {
      contador++;
    }
  }
  alert(`Además el número ${num} aparece ${contador} veces`);
}

function todosPares(array) {
  let todosPares;
  for (let l = 0; l < array.length; l++) {
    if (array[l] % 2 == 0) {
      todosPares = true;
    } else {
      todosPares = false;
      break;
    }
  }
  if (todosPares) {
    alert("Y todos los numeros de la array son pares");
  } else {
    alert("Y hay al menos un numero impar en la array");
  }
}
function myScript() {
  let num = 1; //Ponemos uno para que entre la primera vez en el bucle while,a partir de ella el usuario puede modificarlo y terminar
  let contador = 0;
  let array = [];
  let arrayTxt = "";
  let pares = 0;
  let impares = 0;
  while (Number.isInteger(num) && num != 0 && !Number.isNaN(num)) {
    num = parseFloat(
      prompt(`Introduce el elemento ${contador + 1} de la array`)
    );
    array.push(num);
    if (num == 0) {
      array.pop();
    } else if (num % 2 != 0 && !Number.isNaN(num)) {
      impares++;
    } else if (num % 2 == 0) {
      pares++;
    } else {
      //Si entra aqui no es un integer ni un Nan
    }
    if (Number.isInteger(array[contador])) {
      arrayTxt += array[contador] + " ";
    }
    contador++;
  }
  alert(
    `Has creado la siguente array ${arrayTxt} y tiene los siguentes numeros pares:${pares} e impares ${impares}`
  );
}
function creaArrays() {
  let array = [];
  let elemento;
  let cont = 1;
  do {
    elemento = prompt(
      "Introduce cualquier cosa como elemento " +
        cont +
        " ,si es 0 terminara de pedir*"
    );
    array.push(elemento);
    if (array[cont - 1] == 0) {
      array.pop();
    }
    cont++;
  } while (elemento != 0);

  return array;
}
function buscador() {
  return prompt("Ahora escribe el texto que quieras buscar");
}
function ej6(array, letra) {
  var cont = false;
  for (let o = 0; o < array.length; o++) {
    if (letra == array[o]) {
      cont = true;
    }
  }
  console.log(cont);
}
function listar(array) {
  let txt;
  for (let p = 0; p < array.length; p++) {
    if (p != array.length - 1) {
      txt += array[p] + "-";
    } else {
      txt += array[p];
    }
  }
  alert(txt);
  return txt;
}
