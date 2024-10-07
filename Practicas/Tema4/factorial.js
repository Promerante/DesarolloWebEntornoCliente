function Factorial(){
    var num1;
    do{
        var num1=parseFloat(prompt("Introduce el numero"));  
    }while(!num1>0 || isNaN(num1));
    alert("Su factorial es " + calculo(num1));
}


function calculo(x){
    var factorial=1;
    for(x;x>1;x--){
        factorial*=x;
    } 
    return factorial;
};