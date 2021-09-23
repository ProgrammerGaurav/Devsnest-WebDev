function a(val) {
  document.getElementById("display").value += val;
}
function plusMinus() {
  document.getElementById("display").value *= -1;
}
function clr(val) {
  document.getElementById("display").value = val;
}
function calc() {
  try {
    clr(eval(document.getElementById("display").value));
  } catch (calc) {
    clr("Error");

    function del() {
      var textF = display.value;
      var textE = textF.slice(0, textF.length - 1);
      display.value = textE;
      changeFontsize(display.value.length);
    }
  }
}

var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}
