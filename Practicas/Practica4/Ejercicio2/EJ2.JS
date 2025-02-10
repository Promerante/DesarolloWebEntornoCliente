window.onload = function () {
  let añadirCheckBox = document.getElementById("addCheckbox");
  let leerCheckBox = document.getElementById("readCheckboxes");
  añadirCheckBox.addEventListener("click", function () {
    let txtArea = document.getElementById("checkboxLabel");
    let txt = txtArea.value;
    let output = document.createElement("input");
    output.type = "checkbox";
    output.name = "opciones";
    output.value = txt;
    output.txt;
    let cont = document.getElementById("checkboxContainer");
    cont.appendChild(output);
    // Checkbox metido
    cont.appendChild(document.createTextNode(txt));
    // Texto metido
    cont.appendChild(document.createElement("br"));
    // Br metido
    txtArea.value = "";
  });
  leerCheckBox.addEventListener("click", function () {
    let checBoxs = document.getElementsByName("opciones");
    let txt = "";
    for (let i = 0; i < checBoxs.length; i++) {
      if (checBoxs[i].checked == true) {
        txt += checBoxs[i].value + "\n";
      }
      document.getElementById("outputArea").value = txt;
    }
  });
};
