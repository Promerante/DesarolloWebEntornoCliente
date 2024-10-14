function sumaArrays() {
  alert("Introduce 5 numeros:");
  array = [];
  var total = 0;
  for (var i = 0; i < 5; i++) {
    array[i] = parseFloat(prompt("Introduce el numero " + (i + 1)));
    total += array[i];
  }
  alert("El total es " + total);
  return array;
}

function maxArrays(){
    var array2=sumaArrays();
    let max=0;
    for(let j=0;j<array2.length;j++){
        if(max<array2[j]){
            max=array2[j];
        }
    }
    alert("Y el maximo es "+max);
}
