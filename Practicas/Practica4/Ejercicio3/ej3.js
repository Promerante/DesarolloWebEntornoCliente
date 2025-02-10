window.onload = function () {
  let lista = document.getElementById("imageSelect");
  let botones = document.getElementsByName("imageOption");
  let contImg = document.getElementById("imageContainer");
  let parrafoRelleno = document.getElementsByTagName("p")[2];
  let img = document.createElement("img");
  lista.addEventListener("input", function () {
    // Importante,reiniciamos el contenedor img
    let imgs = document.querySelectorAll("img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].remove();
    }
    //
    parrafoRelleno.hidden = true;

    switch (lista.value) {
      case "JS.png":
        botones[0].checked = true;

        img.src = lista.value;
        contImg.appendChild(img);
        break;
      case "HTML.png":
        botones[1].checked = true;
        img.src = lista.value;
        contImg.appendChild(img);

        break;
      case "CSS.png":
        botones[2].checked = true;
        img.src = lista.value;
        contImg.appendChild(img);
        break;
      default:
        // Caso ninguno seteado
        for (let i = 0; i < botones.length; i++) {
          botones[i].checked = false;
        }
        parrafoRelleno.hidden = false;
        break;
    }
  });
  for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("input", function () {
      let imgs = document.querySelectorAll("img");
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].remove();
      }
      parrafoRelleno.hidden = true;
      switch (botones[i].value) {
        case "JS.png":
          lista.value = "JS.png";
          img.src = lista.value;
          contImg.appendChild(img);
          break;
        case "HTML.png":
          lista.value = "HTML.png";
          img.src = lista.value;
          contImg.appendChild(img);
          break;
        case "CSS.png":
          lista.value = "CSS.png";
          img.src = lista.value;
          contImg.appendChild(img);
          break;
        default:
          // Caso ninguno seteado
          lista.value = "";
          parrafoRelleno.hidden = false;
          break;
      }
    });
  }
};
