function Saludar(){
    alert("Hola");
}
function Operar(){
    let num1= parseFloat(prompt("Introduce un num"));
    let num2= parseFloat(prompt("otro"));
    let suma= Sumar(num1,num2);
    let resta= Restar(num1,num2);
    let producto=Mult(num1,num2);
    alert(`La suma es ${suma} , la resta ${resta} , y el producto ${producto}`)
}
function Sumar(x,y){
    return x+y;
}
function Restar(x,y){
    return x-y;
}
function Mult(x,y){
    return x*y;
}