window.onload = function () {
  function ejercicio2() {
    var lista = document.getElementsByTagName("li"); //Las listas que hayan en la pagina devolvida en una "Array", o al menos
    //suficientemente parecida a una array para lo que trabajare con esta
    var input = prompt("Introduzca una cadena de texto");
    var operacion = prompt(
      "Ahora introduzca la operacion: \n + : se incluirá al final de la lista\n * : se incluirá el primero de la lista.\n 1,2,3,4……..: reemplazará la entrada oportuna."
    );
    let ol = document.getElementsByTagName("ol")[0]; //OJOOO: esto lo hago a conciencia de que no modificare nunca este html
    // y solo hay una lista en ella,con esto la variable ol se dirige directamente a la lista que quiero
    var elemento = document.createElement("li");
    var texto = document.createTextNode(input);
    var idRemplazo=parseInt(operacion);//Caso de que sea un número 
    if (operacion == "+") {
      //CASO FINAL LISTA
      elemento.appendChild(texto);
      ol.appendChild(elemento);
    } else if (operacion == "*") {
      //CASO PRIMERO DE LA LISTA
      elemento.appendChild(texto);
      ol.prepend(elemento);//Con esta simple funcion lo metemos al principio(Y menos mal porque la "array" lista no es tan amigable)
    } else if (Number.isInteger(idRemplazo)) {
      //CASO REMPLAZO DE LA LISTA
      if(idRemplazo<1||idRemplazo>lista.length){
        alert("Error, indice no existe(habrá que dar de nuevo a Añadir).")
      }else{
        //Esto significa que pasa un numero y es uno de los que tenemos
        let liDeseado=lista[idRemplazo-1];
        liDeseado.innerHTML=input;
      }
    }else{
        alert("Error introduciendo la operacion(habrá que dar de nuevo a Añadir).")
    }
  }

  window.ejercicio2 = ejercicio2;
};
