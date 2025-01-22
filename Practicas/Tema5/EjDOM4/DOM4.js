window.onload = function () {
  const ej14 = document.getElementById("ej14");
  var id ;
  ej14.addEventListener("mouseenter", function(){
    id= setInterval(ejercicio14, 1);
  });
  ej14.addEventListener("mouseout",function(){
    window.clearInterval(id)
  });
  function ejercicio14() {
  
    // console.log("iniciado")
      ej14.innerHTML = "jijijiji";
      let ej14Estilo = getComputedStyle(ej14);
      let izquierda = parseInt(ej14Estilo.getPropertyValue("left"));
      ej14.style.setProperty("left", `${izquierda + 1}px`);
    
  }
};
