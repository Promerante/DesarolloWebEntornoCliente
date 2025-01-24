window.onload=function(){
    function ejercicio3(){
        var filas,columnas;
        do {
            filas=parseInt(prompt("Introduzca el numero de filas(entero positivo menor o igual que 10)"));
        } while (filas<1|| filas>10 || !Number.isInteger(filas));//0 no tiene sentido
        do {
            columnas=parseInt(prompt("Introduzca el numero de columnas(entero positivo menor o igual que 10)"));
        } while (columnas<1 || columnas>10 || !Number.isInteger(columnas));
        let container=document.getElementById("solucion");
        let tabla=document.createElement("table");
        tabla.setAttribute("class","tabla");
        for(let i=1;i<=filas;i++){
            let fila=document.createElement("tr");
            for(let j=1;j<=columnas;j++){
                let celda=document.createElement("td");
                let txt=document.createTextNode(i);
                celda.appendChild(txt);
                fila.appendChild(celda);
                celda.addEventListener("click",function(){
                    celda.removeChild(txt);
                    //Con todo esto lo que hago es que cada nodo(cada celda) tenga un evento al hacerlo click que borrara el txt y pondra la imagen
                    let img=document.createElement("img");
                    let nombreImg=prompt("Introduzca el nombre de la imagen deseada");
                    if(nombreImg=="HTML.png"||nombreImg=="CSS.png"||nombreImg=="PHP.png"||nombreImg=="Python.png"){
                        img.setAttribute("src",`${nombreImg}`);
                        img.setAttribute("alt",`${nombreImg}`);
                        celda.appendChild(img);
                    }else{
                        img.setAttribute("src",`JS.png`);
                        img.setAttribute("alt",`JS.png`);
                        celda.appendChild(img);
                    }
                })
            }
            tabla.appendChild(fila);
        }
        container.appendChild(tabla);

    }
    window.ejercicio3=ejercicio3;

}