window.onload = function () {
  var dvd = document.getElementById("dvd");
  dvd.addEventListener("click", function () {
    desaparecerTitulo();
    var id = setInterval(function () {
      var estado = estado(dvd);
    }, 1);
  });
  function desaparecerTitulo() {
    var titulo = document.getElementById("titulo");
    titulo.style.display = "none";
  }
  function estado(dvd) {
    var datos = [];
    datos[0] = parseFloat(
      window.getComputedStyle(dvd).getPropertyValue("left")
    );
    // datos 0 posicion X
    datos[1] = parseFloat(window.getComputedStyle(dvd).getPropertyValue("top"));
    // datos 1 posicion Y

    datos[2] = Math.floor(Math.random() * 2) + 1;
    // datos 2 modulo velocidad
    var borde = false;
    var caso;
    if (posX <= 0) {
      // Caso toca borde izquierdo
      borde = true;
      caso = "izquierda";
    } else if (posX + 151 >= screenX) {
      // Caso borde derecho, notese que 151 para que concuerde con la parte derecha de la imagen,misma logica para la Y
      borde = true;
      caso = "derecha";
    }
    if (posY <= 0) {
      borde = true;
      caso = "arriba";
    } else if (posY + 69 >= screenY) {
      borde = true;
      caso = "abajo";
    }
    datos[3] = direccion(dvd, borde, caso);
  }
  function direccion(dvd, borde, caso) {
    var direccion;
    if (typeof direccion == "undefined") {
      // No existe direccion aun
      if (!borde) {
        direccion = Math.PI * (Math.random() * (1 / 2));
    }else{
        switch (caso) {
            case "izquierda":
                
                break;
                case "izquierda":
                
                break;
            default:
                break;
        }
    }
    }
    return direccion;
  }
};
