window.onload=function(){
    function modificarTabla(){

    }
    function cambiarTexto(){
        let parrafo=document.getElementById("parra");
        console.log(parrafo.innerHTML);
        parrafo.innerHTML="<em>Este es el nuevo contenido</em>"
    }
    function copiarTexto(){
        let texto=document.getElementById("texto");
        let destino=document.getElementById("destino");
        destino.innerHTML=texto.innerHTML;
    }
    function pisarTexto(){
        let parrafo=document.getElementById("padre");
        parrafo.textContent="Donde caemos gente";
    }
    function cambiarEstTexto(){
        let clase=document.getElementById("estilo");
        clase.setAttribute("class","nuevoEstilo");

    }
    function suma(){
        let caja= document.getElementById("containerNum");
        let num=parseInt(caja.textContent);
        num++;
        caja.textContent=num; 
    }
    function resta() {
        let caja= document.getElementById("containerNum");
        let num=parseInt(caja.textContent);
        num--;
        caja.textContent=num;
    }
    function cambiarTexto2(parrafo){
        parrafo.textContent="yei,has hecho click en mí";
        alert("OH NO,ME HAS CAMBIADO :C")
    }
    window.cambiarTexto2=cambiarTexto2;
    window.resta=resta;
    window.suma=suma;
    window.cambiarTexto=cambiarTexto;
    window.copiarTexto=copiarTexto;
    window.pisarTexto=pisarTexto;
    window.cambiarEstTexto=cambiarEstTexto;
}