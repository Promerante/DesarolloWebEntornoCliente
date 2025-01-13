window.onload = function () {
  function añadirElemento() {
    let texto = document.createTextNode(
      prompt("Introduzca la cadena de texto que quiera añadir")
    );
    let li = document.createElement("li");
    li.appendChild(texto);

    let lista = document.getElementById("lista1");
    lista.appendChild(li);
  }

  let parrafos=document.querySelectorAll("pre");
  let botones=document.querySelectorAll("button");
  function generar(){
   
    if(parrafos.length!=0){
        let parrafo=document.createElement("pre");
        let contenido=document.createTextNode(parrafos[0].textContent);
        let ej2=document.getElementById("ej2");
        parrafo.appendChild(contenido);
        parrafo.setAttribute("class","estilo2")
        ej2.appendChild(parrafo);
        botones[3].disabled=false;
    }else{
        alert("No funciona esta vacio");
    }
  }

  function borrarViejo(boton){
    parrafos[0].remove();
    boton.disabled=true;

  }

  function borrarNuevos(boton){
    let nuevos=document.querySelectorAll(".estilo2")
    for(let i=0;i<nuevos.length;i++){
        nuevos[i].remove();
    }
    boton.disabled=true;
  }


  window.añadirElemento = añadirElemento;
  window.generar=generar;
  window.borrarViejo=borrarViejo;
  window.borrarNuevos=borrarNuevos;
};
