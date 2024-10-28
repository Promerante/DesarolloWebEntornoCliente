function Ejercicio1() {
  let num;
  do {
    num = parseFloat(
      prompt("Introduce la cantidad de metros que desea convertir:")
    );
  } while (num < 0 || Number.isNaN(num));
  alert(`${num} metros equivalen a  ${num / 1000} kilómetros`);
}

function Ejercicio2() {
  let num;
  let cont = 1;
  let IM10 = 0; //IntervaloMenor10
  let IE1020 = 0; //10 a 20 incluidos
  let IE2130 = 0; //21 a 30 incluidos
  let IM30 = 0; //Mayor a 30
  do {
    num = parseInt(prompt(`Introduce el número ${cont}`)); //Asi pasamos los numeros introducidos a enteros
    if (!Number.isNaN(num)) {
      //Si no es NaN ergo es un numero entero
      if (num < 10) {
        IM10++;
      } else if (10 <= num && num <= 20) {
        IE1020++;
      } else if (21 <= num && num <= 30) {
        IE2130++;
      } else if (num > 30) {
        IM30++;
      }
      cont++;
    }
  } while (cont <= 10);
  alert(
    `Menores de 10:${IM10}. Entre 10 y 20:${IE1020}. Entre 21 y 30:${IE2130}. Mayores de 30:${IM30}.`
  );
}

function Ejercicio3() {
  let num;
  let array = [];
  do {
    num = parseInt(
      prompt(`Introduce el elemento ${array.length + 1} de la array`)
    );
    if (num >= 0 && Number.isInteger(num)) {
      array.push(num);
    }
  } while (array.length != 7);
  //Apartado A
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  console.log(`El array es [${array}] y la sumatoria es ${total}`);
  //Apartado B
  let cont = 0;
  let ind = 0;
  do {
    num = parseInt(
      prompt(
        `Introduce el elemento que quieras que sustituya el ${
          ind + 1
        } de la array`
      )
    );
    if (num >= 0 && Number.isInteger(num)) {
      array.splice(ind, 1, num);
      ind = array.length - 1; //Ahora marcamos que indice sera el ultimo de la array
      cont++;
    }
  } while (cont != 2);
  console.log(`El array ahora es [${array}]`);
  //Apartado C
  let media;
  total = 0; //OJO:Lo seteamos a cero de nuevo porque el array esta actualizado!
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  media = parseFloat(total / array.length); //FALTA LIMITARLO A 2 DECIMALES
  let arreglo = media - parseInt(media); //Con esto tenemos todos los digitos decimales
  media = media - arreglo; //Guardamos media sin los decimales.
  arreglo = parseInt(arreglo * 100); //Aislamos los primeros 2 decimales
  arreglo = parseFloat(arreglo / 100); //Los volvemos a convertir en ellos.
  media = parseFloat(media + arreglo);
  console.log(media);
  //Apartado D
  let mayores = "Numeros Mayores Media: ";
  let menores = "Numeros Menores Media:";
  for (let i = 0; i < array.length; i++) {
    if (array[i] > media) {
      mayores += array[i] + ",";
    } else if (array[i] < media) {
      menores += array[i] + ",";
    }
  }
  mayores = mayores.substring(0, mayores.length - 1);
  menores = menores.substring(0, menores.length - 1); //Todo esto para quitarle la coma del fina

  console.log(`Suponiendo media=${media}\n${mayores}\n${menores}`);
  //Apartado E
  do {
    num = parseFloat(prompt(`Introduce el elemento que quieras buscar`));
  } while (Number.isNaN(num)); //OJO PUEDE METER NUMEROS DECIMALES QUE NO VA A PODER ENCONTRAR
  let txt = `El numero ${num} aparece en la posiciones: `;
  cont = 0; //Volvemos a iniciar contador a 0 para el caso de que no haya ninguno igual
  for (let i = 0; i < array.length; i++) {
    if (array[i] == num) {
      txt += `${i + 1},`;
      cont++;
    }
  }
  txt = txt.substring(0, txt.length - 1);
  if (cont == 0) {
    txt = `El número ${num} no se encuentra`;
  }
  console.log(txt);
}

function Ejercicio4() {
  do {
    var N = parseInt(
      prompt("Introduce numero entero positivo N entre 2 y 5(incluidos)")
    );
  } while (!(N >= 2 && N <= 5 && Number.isInteger(N)));
  let matriz = [];
  //Apartado A:
  for (let i = 1; i <= N; i++) {
    matriz[i] = [];
    for (let j = 1; j <= N; j++) {
      matriz[i].push(parseInt(Math.random() * (99 - 1) + 1));
    }
  }
  matriz.shift(); //Esto lo hago para quitar el primer que se halla vacio.
  //Apartado B:
  console.log(modotexto(matriz));
  //Apartado C:
  let sumatorio = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      sumatorio += matriz[i][j];
    }
  }
  console.log(sumatorio);
  //Apartado D:
  let matrizCopia = [];
  for (let i = 0; i < matriz.length; i++) {
    matrizCopia[i] = [];
    for (let j = 0; j < matriz.length; j++) {
      if (matriz[i][j] <= 50) {
        matrizCopia[i][j] = 50;
      } else {
        matrizCopia[i][j] = matriz[i][j];
      }
    }
  }

  console.log(modotexto(matrizCopia));
  //Apartado E:
  let diagonalMatriz = 0;
  let diagonalCopia = 0;
  for (let i = 0; i <= N - 1; i++) {
    diagonalMatriz += matriz[i][i];
    diagonalCopia += matrizCopia[i][i];
  }
  if (diagonalMatriz > diagonalCopia) {
    console.log("La matriz original tiene una diagonal mayor");
  } else if (diagonalMatriz < diagonalCopia) {
    console.log("La matriz copia tiene una diagonal mayor");
  } else {
    console.log("Las matrices tienen diagonales iguales");
  }
}

function modotexto(array) {
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
  return txt;
}
