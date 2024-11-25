window.onload = function () {
  function actualizar() {
    document.getElementById("inicio").setAttribute("href", "inicio.html");
    document.getElementById("servicios").setAttribute("href", "servicios.html");
    document.getElementById("contacto").setAttribute("href", "contacto.html");
  }

  function resaltar() {
    let servicios = document.getElementById("servicios");
    if (servicios.style.backgroundColor == "yellow") {
      /*OJO: en teoria esta es una mala comprobacion para probar de que el diseño de servicio esta cambiado y vuelva a su estado original, sin embargo por la sencillez
        del ejercicio no hay otra manera de que este enlace llegue a otro estado de diseño que habiendo dado "el primer click" al boton resaltar y habiendo cambiado al estilo pedido
        en primera instancia,por eso decido utilizar esta sencilla condicional para volver a dejarlo en su estado inicial. */
      servicios.style.backgroundColor = "white";
      servicios.style.color = "black";
    } else {
      servicios.style.backgroundColor = "yellow";
      servicios.style.color = "red";
    }
  }

  //IMPORTANTE:ESTO QUEREMOS QUE PASE AL CARGAR LA PAGINA ASI QUE NO ES UNA FUNCION INTERNA, ES YA CUANDO CARGUE LA PAGINA;
  //Ejercicio 2
  const clases = document.getElementsByClassName("parrafo");
  const parrafo = clases[0];
  parrafo.setAttribute("class", "estilo1");
  function estilo2() {
    if (parrafo.getAttribute("class") == "estilo2") {
      parrafo.setAttribute("class", "estilo1");
    } else {
      parrafo.setAttribute("class", "estilo2");
    }
  }
  function cambiaTxt() {
    let estiloParrafo = getComputedStyle(parrafo);
    if (estiloParrafo.getPropertyValue("color") == "rgb(0, 0, 255)") {
      //OJO: EL VALOR DEVUELTO ESTA EN RGB,A ESO HAY QUE COMPARARLO. No simplemente a "blue"
      parrafo.style.color = "red";
    } else if (
      estiloParrafo.getPropertyValue("color") == "rgb(255, 255, 255)"
    ) {
      parrafo.style.color = "green"; //OJO:Al igual que el ejercicio 1, no es solo cuando esta blanco,pero no puede tener otro valor que azul o blanco.
    }
  } //ERROR EN ALGO

  function ej3(celda) {
    let arrayEstado = ["Marcado", "Pendiente", "Completado"];
    let celdaTxt = celda.textContent;
    if (celdaTxt == arrayEstado[arrayEstado.length - 1]) {
      //Controlamos que el texto no sea el ultimo de la array
      celda.textContent = arrayEstado[0];
    } else {
      for (let i = 0; i < arrayEstado.length; i++) {
        if (celdaTxt == arrayEstado[i]) {
          celda.textContent = arrayEstado[i + 1];
          break; //Ponemos el break como caso excepcional: necesito el for para que recorra todos los casos de la array, pero quiero que la funcion pase solo UNA vez
        }
      }
    }
  }

  function ej4(siguiente) {
    let imagenes = document.getElementsByClassName("imagenes"); //array con todas las imagenes.
    let boolean = true;
    let i = 0;
    if (siguiente) {
      //Funcion sig.
      while (boolean) {
        let estilo = getComputedStyle(imagenes[i]);
        let display = estilo.getPropertyValue("display"); //Recogemos el valor del display de la imagen
        if (
          display == "block" &&
          imagenes[i] != imagenes[imagenes.length - 1]
        ) {
          imagenes[i].style.setProperty("display", "none");
          imagenes[i + 1].style.setProperty("display", "block");
          boolean = false;
        } else if (display == "block") {
          //CASO DE QUE SEA EL ULTIMO
          imagenes[i].style.setProperty("display", "none");
          imagenes[0].style.setProperty("display", "block");
          boolean = false;
        }
        i++;
      }
    } else {
      //Funcion anterior
      while (boolean) {
        let estilo = getComputedStyle(imagenes[i]);
        let display = estilo.getPropertyValue("display"); //Recogemos el valor del display de la imagen
        if (display == "block" && imagenes[i] != imagenes[0]) {
          imagenes[i].style.setProperty("display", "none");
          imagenes[i - 1].style.setProperty("display", "block");
          boolean = false;
        } else if (display == "block") {
          //CASO DE QUE SEA EL ULTIMO
          imagenes[i].style.setProperty("display", "none");
          imagenes[imagenes.length - 1].style.setProperty("display", "block");
          boolean = false;
        }
        i++;
      }
    }
  }

  window.actualizar = actualizar;
  window.resaltar = resaltar;
  window.estilo2 = estilo2;
  window.cambiaTxt = cambiaTxt;
  window.ej3 = ej3;
  window.ej4 = ej4;
};
