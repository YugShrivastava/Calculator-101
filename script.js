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
