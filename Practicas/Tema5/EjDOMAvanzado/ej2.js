window.onload=function(){
    let tarea=0
    let producto=0
    function añadirElementos(){

        let li=document.createElement("li");
        tarea++;
        let texto=document.createTextNode("Nueva tarea "+tarea);
        li.appendChild(texto);

        let lista=document.getElementById("lista");
        lista.appendChild(li);

    }

    function añadirFila(){
        let fila=document.createElement("tr");
        let dato1=document.createElement("td");
        let dato2=document.createElement("td");
        producto++;
        let texto1=document.createTextNode("Producto "+ producto);
        dato1.appendChild(texto1);
        let precio=(1+Math.random()*100).toFixed(2);
        let texto2=document.createTextNode(precio+" $");
        dato2.appendChild(texto2);

        fila.appendChild(dato1);
        fila.appendChild(dato2);

        let tabla=document.getElementById("tabla");
        tabla.appendChild(fila);

    }
    window.añadirElementos=añadirElementos;
    window.añadirFila=añadirFila;
}