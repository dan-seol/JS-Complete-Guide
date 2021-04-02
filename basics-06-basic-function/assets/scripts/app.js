const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getInputNumber() {
    return parseFloat(userInput.value);
}

let add = () => {
    const inputNumber = getInputNumber();
    const initialResult = currentResult;

    currentResult = currentResult + inputNumber;
    //currentResult = currentResult +  parseInt(userInput.value);
    //currentResult = currentResult +  +parseInt(userInput.value);
    //currentResult = currentResult.toString() + userInput.value;

    createAndWriteOutput('+', initialResult, inputNumber, currentResult);
}

let subtract = () => {
    const inputNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult - inputNumber;
    createAndWriteOutput('-', initialResult, inputNumber, currentResult);

}


let multiply = () => {
    const inputNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult * inputNumber;
    createAndWriteOutput('*', initialResult, inputNumber, currentResult);

}

let divide = () => {
    const inputNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult / inputNumber;
    createAndWriteOutput('/', initialResult, inputNumber, currentResult);

}

function createAndWriteOutput(operator, lhs, rhs, result) {
    const calculationDescription = `${lhs} ${operator} ${rhs}`;
    outputResult(result, calculationDescription);
    const logEntry = {
        operation: operator,
        left: lhs,
        right: rhs,
        result: result
    }
    logEntries.push(logEntry);
    console.log(logEntries);

}


//currentResult = additionResult;
//currentResult = (currentResult + 10) * 3 / 2 - 1;
//currentResult = (additionResult + 10) * 3 / 2 - 1;

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
//let calculationDescription = `(${additionResult} + 10) * 3 / 2 - 1`;

