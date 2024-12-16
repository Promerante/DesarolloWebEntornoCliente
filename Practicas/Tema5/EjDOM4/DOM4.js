window.onload = function () {
  const ej14 = document.getElementById("ej14");
  ej14.addEventListener("mouseover", ejercicio14);
    ej14.addEventListener("mouseout",tutia);
  function ejercicio14() {
    let id = setInterval(mover, 1);
    function mover() {
       
      ej14.innerHTML = "jijijiji";
      let ej14Estilo = getComputedStyle(ej14);
      let izquierda = parseInt(ej14Estilo.getPropertyValue("left"));
      ej14.style.setProperty("left", `${izquierda + 1}px`);
    }
  }
};
