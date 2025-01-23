window.onload = function () {
  function ejercicio15(boton) {
    if (boton.id == "ej15bt1") {
      let metro = document.getElementsByTagName("meter")[0];
      metro.value = 0;
      var id = setInterval(function () {
        if (metro.value < 100) {
          let aumento = parseInt(Math.random() * 10);
          metro.value += aumento;
          boton.disabled = true;
        } else {
          boton.disabled = false;
        }
      }, 100);
    } else {
      let metro = document.getElementsByTagName("progress")[0];
      metro.value = 0;
      var id = setInterval(function () {
        if (metro.value < 100) {
          boton.disabled = true;
          let aumento = parseInt(Math.random() * 10);
          metro.value += aumento;
        } else {
          boton.disabled = false;
        }
      }, 100);
    }
  }

  window.ejercicio15 = ejercicio15;
};
