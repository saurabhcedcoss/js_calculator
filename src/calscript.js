// javascript file for clculator
var inNumbf = "";
var hisArr = [];
function clearfn() {
  document.getElementById("dispe").innerHTML = "";
  document.getElementById("inputNum").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  inNumbf = "";
  hisArr = [];
}

function inputval(type) {
  inNumbf += type.value;
  document.getElementById("inputNum").innerHTML = inNumbf;
  if (type.id == "plus") {
    hisArr.push(inNumbf);
    inNumbf = "";
    document.getElementById("inputNum").innerHTML = "";
  }
  if (type.id == "minus") {
    hisArr.push(inNumbf);
    inNumbf = "";
  }
  if (type.id == "multiply") {
    hisArr.push(inNumbf);
    inNumbf = "";
  }
  if (type.id == "divide") {
    hisArr.push(inNumbf);
    inNumbf = "";
  }
  if (type.id == "equal") {
    hisArr.push(inNumbf);
    inNumbf = "";
    document.getElementById("inputNum").innerHTML = "";
    var expRession = hisArr.toString().replace(/,/g, "");
    var result = Function("return " + expRession)();
    document.getElementById("result").innerHTML = result;
  }

  document.getElementById("dispe").innerHTML = hisArr
    .toString()
    .replace(/,/g, "");
}
