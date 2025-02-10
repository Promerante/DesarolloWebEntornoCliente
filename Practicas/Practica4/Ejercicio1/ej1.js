window.onload = function () {
  document
    .getElementById("splitTextarea")
    .addEventListener("click", function () {
      let container = document.getElementById("inputContainer");
      let txtArea = document.getElementById("mainTextarea");
      let txt = txtArea.value;
      txtArea.value = "";
      let parrafos = document.querySelectorAll("p");
      parrafos.forEach((element) => {
        element.remove();
      });
      //Con esto tomamos el valor del input y reiniciamos el txtArea y el contenedor por si ya tiene texto por haberlo pulsado antes
      let txtArray = txt.split("");
      //   Dividimos el input en una array separada por cada carácter
      let intSuperior = txtArray.length / 3;
      let intInferior = 0;
      if (txtArray.length != 0) {
        while (intSuperior <= txtArray.length) {
          //
          let nodo = document.createElement("p");
          let txt = "";
          for (let i = 0; i < txtArray.length; i++) {
            if (i >= intInferior && i < intSuperior) {
              txt += txtArray[i];
            }
          }
          let nodoTxt = document.createTextNode(txt);
          nodo.appendChild(nodoTxt);
          container.appendChild(nodo);
          intInferior = intSuperior;
          intSuperior += txtArray.length / 3;
        }
      } else {
        alert("txt area vacio");
      }
    });
  // FALTA VER LA FORMA DE APROXIMA
};
