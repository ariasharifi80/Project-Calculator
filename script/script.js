// press one number ,, save that number
// press the operator,, save the operator
//press the second operator,, save the number 
//press equal sign,, calculate the results

const add = function (a, b) {
    return a + b;
  };
  const subtract = function (a, b) {
    return a - b;
  };
  function multiply(a, b) {
    return a * b;
  }

  function divide (a, b){
    return a / b;
  }

let firstNumber;
let secondNumber;
let step = 0;
let operation;
let results = 0;
let numArray = [];
let secondNumArray = [];
const display = document.getElementById('display');

function getNumber(num){
   if (step === 0 || step === 1){
    numArray.push(num)
    step = 1
    firstNumber = Number(numArray.join(''));
    display.value = firstNumber;
   } else if (step === 2){
    secondNumArray.push(num);
    secondNumber = Number(secondNumArray.join(''));
    display.value =secondNumber;
   }
    

}

function getOperator(op){
    step = 2;
    operation = op;
  display.value = op
}


function clearDisplay(){
    display.value = 0
    firstNumber = null;
    secondNumber = null;
    step = 0;
    operation = null;
    results = 0;
    numArray = [];
    secondNumArray = [];
}

const calculateEquals = () => {
   if(operation === '+'){
    results = add(firstNumber, secondNumber);
    display.value = results;
   } else if (operation === '-'){
      results = subtract(firstNumber, secondNumber);
      display.value = results;
   } else if(operation === '*'){
    results = multiply(firstNumber, secondNumber);
    display.value = results
   } else if (operation === '/'){
    results = divide(firstNumber, secondNumber);
    display.value = results;
   }
}

