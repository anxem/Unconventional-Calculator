/* Explanation 
- First we creation a veriable for default result and make it a constant
cause its wont change

- then we try to output this result by calling it in the 
outputResult function in the vendor file

- then to do the calculation we write a function and assign 
currentResult to the function call

- for the calSummary

*/

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Generates and write calculation log
function createAndWriteOutput(resultBeforcal, operator, calNumber) {
  const calDescription = `${resultBeforcal} ${operator} ${calNumber}`;
  outputResult(currentResult, calDescription); //from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
}

function calculateResult(calculationType) {
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber //when no number is entered so it returns false
  ) {
    return;
  }
  // we can use either the AND condition above or the OR condition down here to
  // check for the conditions.

  //   if (
  //     calculationType === "AND" ||
  //     calculationType === "SUBTRACT" ||
  //     calculationType === "MULTIPLY" ||
  //     calculationType === "DIVIDE"
  //   ) {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  // this statement will still run even when its not divide and thats not what we
  // we want so we use the && or || conditional to check for the operator
  //   }

  createAndWriteOutput(initialResult, "+", enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiple() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiple);
divideBtn.addEventListener("click", divide);
