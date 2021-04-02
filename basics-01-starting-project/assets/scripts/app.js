//alert('This works!');
const defaultResult = 0;
let currentResult = defaultResult;

//defaultResult = defaultResult + 10;// -- error
currentResult += 10;

//let calculationDescription =  '(' + currentResult +' + 10) * 3 / 2 -1';
//let calculationDescription = `(${currentResult} + 10)* 3 / 2 - 1`;
let calculationDescription =  '(' + currentResult +' + 10) * 3 / 2 -1';


//let calculationDescription =  'Hi there!';
let errorMessage = 'An error \\' + 'occurred!'; 


outputResult(currentResult, calculationDescription);