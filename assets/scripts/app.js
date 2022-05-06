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

function add() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput(initialResult, "+", enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput(initialResult, "-", enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiple() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput(initialResult, "*", enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput(initialResult, "/", enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiple);
divideBtn.addEventListener("click", divide);
