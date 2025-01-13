window.onload=function(){
    let p= document.createElement("p");
    p.setAttribute("align","center");

    let texto=document.createTextNode("Este parrafo no estaba antes");
    p.appendChild(texto);

    let capa=document.getElementById("capa");
    let pie=document.getElementById("pie");
   
    capa.appendChild(p);
  

}