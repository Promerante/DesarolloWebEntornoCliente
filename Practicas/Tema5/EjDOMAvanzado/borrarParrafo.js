window.onload=function(){
    function eliminarParrafo(){
        let elemento=document.getElementById("texto");
        let padre=elemento.parentNode;
        padre.removeChild(elemento);
    }

    function eliminarElemento(boton){
        let li=document.querySelectorAll("#lista1 li");
        if(li.length!=0){//SI NO ESTA VACIO
            let ultimo=li[li.length-1];
        
            let padre=ultimo.parentNode;
            padre.removeChild(ultimo);
        }
        else{
            boton.style.display="none";
        }

        
    }

    window.eliminarParrafo=eliminarParrafo;
    window.eliminarElemento=eliminarElemento;
}