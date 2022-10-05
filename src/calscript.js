// javascript file for clculator
var inputcontent = "";
function inputval(input) {
  if (input.value == "*" || "/" || "-" || "+") {
    inputcontent += input.value;
  } else {
    inputcontent += parseInt(input.value);
  }
  document.getElementById("input").value = inputcontent;
}
//clearfunction
function clearfn() {
  document.getElementById("input").value = "";
  inputcontent = "";
}
//equalfunction
function equalfn(){
    //fgdfgdf
}
