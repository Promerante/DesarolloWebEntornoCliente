window.onload = function () {
  function añadirElemento() {
    let texto = document.createTextNode(
      prompt("Introduzca la cadena de texto que quiera añadir")
    );
    let li = document.createElement("li");
    li.appendChild(texto);

    let lista = document.getElementById("lista1");
    lista.appendChild(li);
  }

  let parrafos = document.querySelectorAll("pre");
  let botones = document.querySelectorAll("button");

  function generar() {
    if (parrafos.length != 0) {
      let parrafo = document.createElement("pre");
      let contenido = document.createTextNode(parrafos[0].textContent);
      let ej2 = document.getElementById("ej2");
      parrafo.appendChild(contenido);
      parrafo.setAttribute("class", "estilo2");
      ej2.appendChild(parrafo);
      botones[3].disabled = false;
    } else {
      alert("No funciona esta vacio");
    }
  }

  function borrarViejo(boton) {
    parrafos[0].remove();
    let cajas = document.querySelectorAll("div");
    let ej2 = cajas[1];
    let btEj2 = ej2.querySelectorAll("button");
    btEj2[1].disabled = true;
    btEj2[3].disabled = true; //CUANDO SE PULSA ESTE BOTON LA FUNCION SUSTITUIR SE DESHABILITA
  }

  function borrarNuevos(boton) {
    let nuevos = document.querySelectorAll(".estilo2");
    for (let i = 0; i < nuevos.length; i++) {
      nuevos[i].remove();
    }
    boton.disabled = true;
  }

  function sustituir(boton) {
    let txtViejo = document.querySelector("pre");
    let padre = txtViejo.parentNode; //OJO: Lo hago sabiendo que no se añadira nada mas en la estructura html del ej2 hacia atras y por ello funciona.
    padre.removeChild(txtViejo);
    let tabla = document.createElement("table");
    let cont = 0;
    for (let i = 0; i <= 1; i++) {
      let fila = document.createElement("tr");
      tabla.appendChild(fila); //Introduzco Filas
      for (let j = 1; j <= 2; j++) {
        cont++;
        let celda = document.createElement("td");
        let txtCelda = document.createTextNode(
          "Texto de ejemplo de Celda: " + cont
        );
        celda.appendChild(txtCelda);
        fila.appendChild(celda);
        tabla.appendChild(fila);
      }
    } //Creacion de la Tabla
    tabla.style.backgroundColor = "yellow";
    tabla.setAttribute("border", " 2px solid black");
    tabla.style.fontSize = "2rem"; //Otorgamos estilo a la tabla
    padre.appendChild(tabla); //Insertamos la tabla al html
    boton.disabled = true;
  }
  /*
    Cosas a mejorar:
      Selectores mas dinamicos para que se apunte correctamente a los nodos independientemente a lo que haya cambiado(dificil si no se usa Id ni clases);
      Mejorar los eventos para que haga acciones mas "logicas", por ejemplo por mucho que sustituyamos siempre se introduce el texto viejo con la clase 2    
  */

  function ej3() {
    var filas, columnas;
    do {
      filas = parseInt(
        prompt("Dime el número de filas de la siguiente tabla: ")
      );
      columnas = parseInt(
        prompt("Dime el número de columnas de la siguiente tabla: ")
      );
    } while (
      !Number.isInteger(filas) ||
      !Number.isInteger(columnas) ||
      filas > 10 ||
      filas < 0 ||
      columnas > 10 ||
      columnas < 0
    );

    let tabla = document.createElement("table");
    tabla.setAttribute("class","tablaEj3")
    for (let i = 1; i <= filas; i++) {
      let fila = document.createElement("tr");
      for (let j = 1; j <= columnas; j++) {
       
        let celda = document.createElement("td");
        let txtCelda = document.createTextNode(i);
        celda.addEventListener("click", function(){
          celda.style.backgroundColor="rgb(255,255,0)"

        });
        celda.setAttribute("class","tablaEj3");
        celda.appendChild(txtCelda);
        fila.appendChild(celda);
        tabla.appendChild(fila);
      }
    } //Creacion de la Tabla
    let ej3=document.getElementById("ej3");
    let padre=ej3.parentNode;
    padre.appendChild(tabla)
  }


  window.añadirElemento = añadirElemento;
  window.generar = generar;
  window.borrarViejo = borrarViejo;
  window.borrarNuevos = borrarNuevos;
  window.sustituir = sustituir;
  window.ej3 = ej3;
  window.ej7=ej7;
};
