function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

let firstNumber, secondNumber, operator;

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      add(num1, num2);
      break;
    case "*":
      add(num1, num2);
      break;
    case "/":
      add(num1, num2);
      break;
    default:
      console.log("Error in switch statement of operate");
  }
}

const display = document.querySelector("p");
const numbers = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll(".operations");
const allClear = document.querySelector("#AC");
const clear = document.querySelector("#Clear");
const equals = document.querySelector("#Equals");
const ansPara = document.createElement("p");

let displayValue = "";

numbers.forEach((numBtn) => {
  numBtn.addEventListener("click", (button) => {
    if (display.textContent == 0) display.textContent = "";
    displayValue = button.target.textContent;
    display.textContent += displayValue;
  });
});

operations.forEach((opBtn) => {
  opBtn.addEventListener("click", (button) => {
    if (displayValue !== "+" && displayValue !== "/" && displayValue !== "×" && displayValue !== "-" && displayValue !== "%" && displayValue !== "!") {
      displayValue = button.target.textContent;
      display.textContent += displayValue;
      console.log(true);
    }
    else{
        displayValue = button.target.textContent;   
      let tempArray = display.textContent.split("");
      tempArray.splice(tempArray.length-1, 1, displayValue)
      display.textContent = tempArray.join("");  
    }
  });
});

allClear.addEventListener("click", (button) => {
  display.textContent = "0";
  displayValue = "";
});

clear.addEventListener("click", (button) => {
    let displayValueString = display.textContent.slice(0, -1);
    display.textContent = displayValueString;
    displayValue = display.textContent[display.textContent.length];
    console.log(displayValueString);

    if (display.textContent[0] === undefined) display.textContent = "0";
});

equals.addEventListener("click", (button) => {

})

