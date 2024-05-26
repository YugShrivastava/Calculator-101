function add(num1 = 0, num2 = 0) {
  return num1 + num2;
}
function substract(num1 = 0, num2 = 0) {
  return num1 - num2;
}
function multiply(num1 = 1, num2 = 1) {
  return Math.round(num1 * num2 * 100) / 100;
}
function divide(num1 = 1, num2 = 1) {
  return Math.round((num1 / num2) * 100) / 100;
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
      return 0;
  }
}

const display = document.querySelector("p");
let displayValue = "",
  displayOperator = "",
  flag = 0,
  ans,
  equalsFlag = 0,
  btnEqualsFlag = 0,
  opFlag = 0;

const opPara = document.querySelector("#ansPara");
const ansPara = document.querySelector("#opPara");

const numbers = document.querySelectorAll(".numbers");
numbers.forEach((button) => {
  button.addEventListener("click", (button) => {
    // if (displayOperator[1] !== undefined) {
    //   secondNumber = display.textContent;
    //   ans = operate(firstNumber, displayOperator, secondNumber);
    //   flag = 0;
    //   display.textContent = ans;
    //   displayValue = ans;
    //   console.log("Inside 1 index if (flag = 0)");
    // }

    // if (displayOperator[0] !== undefined && flag === 0) {
    //   firstNumber = display.textContent;
    //   display.textContent = "0";
    //   console.log(display.textContent);
    //   console.log("Inside 0 index if (flag = 1)");
    //   flag = 1;
    // }

    if (equalsFlag === 1) {
      btnEqualsFlag = 1;
      display.textContent = "0";
      displayValue = "";
      ans = undefined;
      displayOperator = "";
      ansPara.textContent = "";
      opPara.textContent = "";
      (flag = 0), (equalsFlag = 0), (btnEqualsFlag = 0);
    }

    if (display.textContent == 0) {
      display.textContent = button.target.textContent;
      displayValue = display.textContent;
    } else {
      display.textContent += button.target.textContent;
      displayValue = display.textContent;
    }
  });
});

const operators = document.querySelectorAll(".operations");
operators.forEach((operator) => {
  operator.addEventListener("click", (operator) => {
    opFlag = 1;
    if (equalsFlag === 1 && btnEqualsFlag === 1) {
      opFlag = 1;
      firstNumber = display.textContent;
      displayOperator += displayOperator[0];

      if (displayOperator[0] !== undefined && flag === 0) {
        firstNumber = Number(display.textContent);
        display.textContent = "0";
        opPara.textContent = displayOperator[0];
        flag = 1;
      }
    }
    if (equalsFlag === 1 && btnEqualsFlag !== 1) {
      console.log("indise elif");
      firstNumber = display.textContent;
      flag = 0;
      displayOperator = operator.target.textContent;
      console.log(displayOperator);

      if (displayOperator[0] !== undefined && flag === 0) {
        firstNumber = Number(display.textContent);
        display.textContent = "0";
        opPara.textContent = displayOperator[0];
        flag = 1;
      }

      if (displayOperator[1] !== undefined && flag === 1) {
        secondNumber = Number(display.textContent);
        ans = operate(firstNumber, displayOperator[0], secondNumber);
        flag = 0;
        display.textContent = ans;
        displayValue = ans;
        displayOperator = displayOperator[1];
        firstNumber = Infinity;
      }

      if (ans !== undefined) {
        ansPara.textContent = "= " + ans;
      }
      opFlag = 0;
      equalsFlag = 0;
      btnEqualsFlag = 0;
    }
    if (opFlag === 1) {
      displayOperator = displayOperator + operator.target.textContent;
      if (displayOperator[3] === displayOperator[2])
        displayOperator.slice(2, 3);
      if (displayOperator[1] !== undefined && flag === 1) {
        secondNumber = Number(display.textContent);
        ans = operate(firstNumber, displayOperator[0], secondNumber);
        flag = 0;
        display.textContent = ans;
        displayValue = ans;
        displayOperator = displayOperator[1];
        firstNumber = Infinity;
      }

      if (displayOperator[0] !== undefined && flag === 0) {
        firstNumber = Number(display.textContent);
        display.textContent = "0";
        opPara.textContent = displayOperator[0];
        flag = 1;
      }
      if (ans !== undefined) {
        ansPara.textContent = "= " + ans;
      }
    }
  });
});

const allClear = document.querySelector("#AC");
const clear = document.querySelector("#Clear");
const equals = document.querySelector("#Equals");

allClear.addEventListener("click", (button) => {
  display.textContent = "0";
  displayValue = "";
  ans = undefined;
  displayOperator = "";
  ansPara.textContent = "";
  opPara.textContent = "";
  (flag = 0), (equalsFlag = 0), (btnEqualsFlag = 0);
});

clear.addEventListener("click", (button) => {
  let displayValueString = display.textContent.slice(0, -1);
  display.textContent = displayValueString;
  displayValue = display.textContent[display.textContent.length];

  if (display.textContent[0] === undefined) display.textContent = "0";
});

equals.addEventListener("click", (equals) => {
  if (displayOperator[0] !== undefined) {
    secondNumber = display.textContent;
    ans = operate(+firstNumber, displayOperator[0], +secondNumber);
  } else {
    ans = display.textContent;
  }

  display.textContent = ans;
  opPara.textContent = "";
  ansPara.textContent = "";
  displayOperator = "";
  btnEqualsFlag = 0;
  equalsFlag = 1;
});

display.addEventListener("keydown", (number) => {
  console.log(`Key = ${number.key}, Code = ${number.code}`)
})