function add(num1 = 0, num2 = 0) {
  return num1 + num2;
}
function substract(num1 = 0, num2 = 0) {
  return num1 - num2;
}
function multiply(num1 = 1, num2 = 1) {
  return num1 * num2;
}
function divide(num1 = 1, num2 = 1) {
  return num1 / num2;
}

function checkDisplay(OP, op) {
  if (display.textContent.includes(op)) {
    console.log("Inside IF");
    finalAnsArray = display.textContent
      .substring(0, display.textContent.length - 1)
      .split(OP);
    finalAns = operate(+finalAnsArray[0], OP, +finalAnsArray[1]);
    console.log(finalAnsArray);
    console.log(finalAns);

    display.textContent = finalAns + op;
    displayValue = op;
  }
}

function displayChecker(OP, op) {
  if (display.textContent.includes(OP) && op !== OP) {
    checkDisplay(OP, op);
  }
}

let firstNumber, secondNumber, operator;

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return substract(num1, num2);
      break;
    case "×":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
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

const plus = document.querySelector("#plus");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#multiply");
const div = document.querySelector("#divide");

let displayValue = "";
let finalAnsArray = [];
let finalAns;

numbers.forEach((numBtn) => {
  numBtn.addEventListener("click", (button) => {
    if (display.textContent == 0) display.textContent = "";
    displayValue = button.target.textContent;
    display.textContent += displayValue;
  });
});

operations.forEach((opBtn) => {
  opBtn.addEventListener("click", (button) => {
    if (
      displayValue !== "+" &&
      displayValue !== "/" &&
      displayValue !== "×" &&
      displayValue !== "-" &&
      displayValue !== "%" &&
      displayValue !== "!"
    ) {
      displayValue = button.target.textContent;
      display.textContent += displayValue;
    } else {
      displayValue = button.target.textContent;
      let tempArray = display.textContent.split("");
      tempArray.splice(tempArray.length - 1, 1, displayValue);
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

  if (display.textContent[0] === undefined) display.textContent = "0";
});

equals.addEventListener("click", (button) => {});

plus.addEventListener("click", (button) => {
  displayChecker("-", "+");
  displayChecker("/", "+");
  displayChecker("×", "+");
  displayChecker("!", "+");
  displayChecker("%", "+");

  finalAnsArray = display.textContent.split("+");
  finalAns = operate(+finalAnsArray[0], "+", +finalAnsArray[1]);
  if (
    display.textContent.split("").lastIndexOf("+") !==
    display.textContent.split("").indexOf("+")
  ) {
    display.textContent = finalAns + "+";
    displayValue = "+";
  } else {
  }
});

sub.addEventListener("click", (button) => {
  displayChecker("+", "-");
  displayChecker("/", "-");
  displayChecker("×", "-");
  displayChecker("!", "-");
  displayChecker("%", "-");
  finalAnsArray = display.textContent.split("-");
  finalAns = operate(+finalAnsArray[0], "-", +finalAnsArray[1]);
  if (
    display.textContent.split("").lastIndexOf("-") !==
    display.textContent.split("").indexOf("-")
  ) {
    display.textContent = finalAns + "-";
    displayValue = "-";
  } else {
  }
});

mul.addEventListener("click", (button) => {
  displayChecker("-", "×");
  displayChecker("/", "×");
  displayChecker("+", "×");
  displayChecker("!", "×");
  displayChecker("%", "×");

  finalAnsArray = display.textContent.split("×");
  finalAns = operate(+finalAnsArray[0], "×", +finalAnsArray[1]);
  if (
    display.textContent.split("").lastIndexOf("×") !==
    display.textContent.split("").indexOf("×")
  ) {
    display.textContent = finalAns + "×";
    displayValue = "×";
  } else {
  }
});

div.addEventListener("click", (button) => {
  displayChecker("+", "/");
  displayChecker("-", "/");
  displayChecker("×", "/");
  displayChecker("!", "/");
  displayChecker("%", "/");
  finalAnsArray = display.textContent.split("/");
  finalAns = operate(+finalAnsArray[0], "/", +finalAnsArray[1]);
  if (
    display.textContent.split("").lastIndexOf("/") !==
    display.textContent.split("").indexOf("/")
  ) {
    display.textContent = finalAns + "/";
    displayValue = "/";
  } else {
  }
});
