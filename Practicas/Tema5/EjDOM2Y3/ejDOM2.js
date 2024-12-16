window.onload = function () {
  function cambiarFondo(boton) {
    document.body.style.backgroundColor = boton.value;
  }
  function cambiarCelda(celda) {
    if (celda.style.backgroundColor == "black") {
      celda.style.backgroundColor = "white";
    } else {
      celda.style.backgroundColor = "black";
    }
  }

  function cambiarCelda2(celda) {
    let arrayColor = ["white", "blue", "red", "green"];
    for (let i = 0; i < arrayColor.length; i++) {
      if (
        celda.style.backgroundColor == "" ||
        celda.style.backgroundColor == "green"
      ) {
        //No esta inicializado o tiene el valor del final de la array
        celda.style.backgroundColor = arrayColor[0];
        break;
      } else if (celda.style.backgroundColor == arrayColor[i]) {
        //Si tiene valores white,blue,red
        celda.style.backgroundColor = arrayColor[i + 1];
        break;
      }
      //Ponemos estos break porque querremos la i solo para identificar la posicion de la array UNA VEZ, si lo dejamos cambiaria intermitentemente
    }
  }
  
  window.cambiarCelda = cambiarCelda;
  window.cambiarCelda2 = cambiarCelda2;
  window.cambiarFondo = cambiarFondo;
};
