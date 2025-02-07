window.onload = function () {
  let input = document.getElementById("input");
  input.oninput = function () {
    document.getElementById("campo2").value = this.value;
  };
};
