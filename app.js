let display = document.getElementById("display");

function ToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

