window.onload = function () {
  var dvd = document.getElementById("dvd");
  dvd.addEventListener("click", function () {
    /*
        QUITAMOS EL TITULO(OBVIO), y obtenemos su posicion.
        *OJO: A PARTIR DE AHORA TRABAJARE CON X E Y, siendo X el horizontal de la pantalla e Y la vertical. Siendo el
        *Punto de referencia la esquina superior izquierda de la pantalla(0,0).
        *Ademas la velocidad trabajaremos por modulo y angulo
    */
    desaparecerTitulo();
    // Booleano para el comienzo hasta el primer rebote
    var comienzo = true;
    // modulo velocidad fijo entre 20 a 40
    var modulo = Math.floor(Math.random() * 2) + 1;
    // Angulo de dirrecion del vector velocidad
    var direccion = darDireccion(comienzo, dvd);
    var posX = parseFloat(
      window.getComputedStyle(dvd).getPropertyValue("left")
    );
    var posY = parseFloat(window.getComputedStyle(dvd).getPropertyValue("top"));
    // Intervalo desde comienzo a primer rebote
    var intervalo = setInterval(
      function () {
        var array = llegaBorde(dvd);
        if (comienzo) {
          // *Caso comienzo hasta primer rebote
          if (!array[0]) {
            posX += modulo * Math.cos(direccion);
            posY += modulo * Math.sin(direccion);

            dvd.style.left = `${posX}px`;
            dvd.style.top = `${posY}px`;
          } else {
            comienzo = false;
          }
        } else {
          clearInterval(intervalo);
        }
      },
      1,
      comienzo,
      modulo,
      direccion
    );
    // Intervalo infinito desde que rebota
    var rebotes = setInterval(rebotes, 1, dvd);
  });

  function desaparecerTitulo() {
    var titulo = document.getElementById("titulo");
    titulo.style.display = "none";
  }
  function darDireccion(comienzo, dvd) {
    var direccion;
    var datos = llegaBorde(dvd);
    if (comienzo) {
      direccion = Math.PI * (Math.random() * (1 / 2));
      // Angulo en radianes aleatorio entre 0 a pi/2(90 grados).
    } else {
      // Dirrecciones asignadas desde que rebota
      switch (datos[2]) {
        case "izquierda":
          
          break;
        case "derecha":
          break;
        case "arriba":
          break;
        case "abajo":
          break;
      }
    }
    return direccion;
  }
  function llegaBorde(dvd) {
    var datos = [];
    var posX = parseFloat(
      window.getComputedStyle(dvd).getPropertyValue("left")
    );
    var posY = parseFloat(window.getComputedStyle(dvd).getPropertyValue("top"));
    var screenX = window.innerWidth;
    var screenY = window.innerHeight;
    var tocaBorde = false;
    if (posX <= 0) {
      // Caso toca borde izquierdo
      tocaBorde = true;
      datos[2] = "izquierda";
    } else if (posX + 151 >= screenX) {
      // Caso borde derecho, notese que 151 para que concuerde con la parte derecha de la imagen,misma logica para la Y
      tocaBorde = true;
      datos[2] = "derecha";
    }
    if (posY <= 0) {
      tocaBorde = true;
      datos[2] = "arriba";
    } else if (posY + 69 >= screenY) {
      tocaBorde = true;
      datos[2] = "abajo";
    }
    datos[0] = tocaBorde;
    datos[1] = darDireccion(false, dvd);
    return datos;
  }
  function rebotes() {

  }
};
