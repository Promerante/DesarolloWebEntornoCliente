window.onload=function(){
    function cambiarEstilo(parrafo){
        parrafo.style.backgroundColor="green";
        parrafo.style.border="20px solid black";
        parrafo.style.color="aqua";
    }
    function ejercicio11(){
        let container2=document.getElementById("container2");
        let container3=document.getElementById("container3");
        container2.style.visibility="visible";
        container3.style.display="block";
    }
    function usainCorre(direccion){
        let usain=document.getElementById("containerImg");
        let usainEstilo=getComputedStyle(usain);
        let usainPosicion=parseInt(usainEstilo.getPropertyValue("left"));
        //usain.style.left=`${usainPosicion+5}px`;
        usain.style.setProperty ("left",`${usainPosicion+5}px`);
    }


    window.cambiarEstilo=cambiarEstilo;
    window.ejercicio11=ejercicio11;    
    window.usainCorre=usainCorre;
}