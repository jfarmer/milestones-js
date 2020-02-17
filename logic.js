


let num1 = 2;
let num2 = 3;
console.log("Using logical operators to evaluate if the two numbers above are both even, off, or if only one is even:")
function evenOrOdd(number1,number2) {
  if (number1%2 === 0 && number2%2 === 0) {
    console.log("EVENS");
  }
  else if(number1%2 !== 0 && number2%2 !== 0) {
    console.log("ODDS");
  }
  else if (number1%2 === 0 || number2%2 === 0) {
    console.log("MIX");
  }
  else {
    console.log("ERROR");
  }
}
evenOrOdd(num1,num2);
