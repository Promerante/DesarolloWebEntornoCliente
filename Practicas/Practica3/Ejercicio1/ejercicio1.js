window.onload = function () {
  function ejercicio1(boton) {
    let barra = document.getElementById("meter"); //La "barrita"
    let contMonedasElemento = document.getElementById("coinCount");
    let contMonedas = parseInt(contMonedasElemento.innerHTML); //El contador,notese que ya esta en formato int para su futuro manejo
    var id = setInterval(function () {
      if (contMonedas == 2) {
        //CASO ULTIMA VUELTA
        boton.disabled = true;
        if (barra.value < 100) {
          //Mientas carga
          barra.value += 25;
        } else {
          //Al terminar de cargar y con ello terminar el ejercicio
          contMonedas++;
          contMonedasElemento.textContent = contMonedas;
          let img = document.createElement("img");
          img.setAttribute("src", "JS.png");
          let container = document.getElementById("imageContainer");
          container.appendChild(img);

          clearInterval(id);
        }
      } else {
        //CASO LAS 2 PRIMERAS
        if (barra.value < 100) {
          //Mientas carga
          barra.value += 25;
          boton.disabled = true;
        } else {
          //Al terminar de cargar
          boton.disabled = false;
          barra.value = 0; //Asi siempre que se pulsa el boton se reinicia la barra
          contMonedas++;
          contMonedasElemento.textContent = contMonedas;
          clearInterval(id);
        }
      }
    }, 1000); //OJO, el 1000 es el segundo parametro de set interval que indica el tiempo de cada intervalo en ms,
    //ponemos mil para que salga cada segundo
  }
  window.ejercicio1 = ejercicio1;
};
