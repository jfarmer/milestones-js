console.log("Look at this array:");
let coolArray= ["Yes", "No", "Maybe So", 5467329];
console.log("Function to print out every element in the array:");
function printArray(array) {
  for (let i = 0; i < array.length;i++) {
    console.log(array[i]);
    console.log();
  }
}
printArray(coolArray);
console.log();
console.log();
console.log("Function to print out every other element in the array, beginning with 1:");
function printEveryOther(array) {
  for (let j = 0; j < array.length;i=j++) {
    if (j%2 === 0) {
      console.log(array[j]);
      console.log();
    }
  }
}
printEveryOther(coolArray);
console.log();
console.log("Function to print out an array in reverse order:");
function reverse(array) {
  for (let k = 0; k < array.length;k++) {
      console.log(array[array.length-(k+1)]);
      console.log();
    }
  }
reverse(coolArray);
