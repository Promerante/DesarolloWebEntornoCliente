window.onload = function () {
  var screenX = window.innerWidth;
  var screenY = window.innerHeight;
  var dvd = document.getElementById("dvd");
  var img = ["img/dvd2.png", "img/dvd3.png", "img/dvd.png", "img/dvd4.png"];

  document.getElementById("titulo").style.display = "none";
  var modulo = Math.floor(Math.random() * 5) + 1;
  direccion = Math.PI * (Math.random() * (1 / 2));
  var posX = 0;
  var posY = 0;
  var velocidad = {
    modulo: modulo,
    direccion: direccion,
  };
  var intervalo = setInterval(function () {
    var datos = llegaBorde(dvd);
    if (datos[0]) {
      velocidad.direccion += Math.PI / 4;
      switch (datos[1]) {
        case "izquierda":
          dvd.style.left = `1px`;
          break;
        case "derecha":
          dvd.style.left = `${screenX - 1}px`;
          break;
        case "arriba":
          dvd.style.top = `0px`;
          break;
        case "abajo":
          dvd.style.top = `${screenY - 500}px`;
          break;
      }
      var color = dvd.getAttribute("src");
      var index = img.indexOf(color);
      index = (index + 1) % img.length;
      dvd.setAttribute("src", img[index]);
    }
    posX += velocidad.modulo * Math.cos(velocidad.direccion);
    posY += velocidad.modulo * Math.sin(velocidad.direccion);
    dvd.style.left = `${posX}px`;
    dvd.style.top = `${posY}px`;
    console.log(datos[0]);
  }, 1);
  function llegaBorde(dvd) {
    var datos = [];
    var posX = parseFloat(
      window.getComputedStyle(dvd).getPropertyValue("left")
    );
    var posY = parseFloat(window.getComputedStyle(dvd).getPropertyValue("top"));
    //   Pongo el 5 para que se vea mejor al choca con el borde
    var tocaBorde = false;
    if (posX <= 0) {
      // Caso toca borde izquierdo
      tocaBorde = true;
      datos[1] = "izquierda";
    } else if (posX + 151 >= screenX) {
      // Caso borde derecho, notese que 151 para que concuerde con la parte derecha de la imagen,misma logica para la Y
      tocaBorde = true;
      datos[1] = "derecha";
    }
    if (posY <= 0) {
      tocaBorde = true;
      datos[1] = "arriba";
    } else if (posY + 70 >= screenY) {
      tocaBorde = true;
      datos[1] = "abajo";
    }
    datos[0] = tocaBorde;
    return datos;
  }
};
