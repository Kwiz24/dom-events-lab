/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*-------------------------------- Constants --------------------------------*/

const operators = ['+', '-', '*', '/'];

/*-------------------------------- Variables --------------------------------*/

let displayValue = '';

/*------------------------ Cached Element References ------------------------*/

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

/*-------------------------------- Functions --------------------------------*/

function handleClick(event) {
  const buttonValue = event.target.textContent;
  
  if (buttonValue === 'C') {
    clearDisplay();
  } else if (buttonValue === '=') {
    evaluateExpression();
  } else {
    updateDisplay(buttonValue);
  }
}

function updateDisplay(value) {
  displayValue += value;
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = '';
  display.textContent = '';
}

function evaluateExpression() {
  try {
    const result = eval(displayValue);
    display.textContent = result;
    displayValue = result.toString();
  } catch (error) {
    display.textContent = 'Error';
    displayValue = '';
  }
}