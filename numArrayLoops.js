console.log("For an array of numbers...");
let listOfNumbers = [5,4,3,-6,8,9,0,1];
console.log("Looping though the array to find and print the largest value:")
function largest(array) {
  let value = 0;
  for (let i = 0;i <= array.length-1;i++) {
    if (array[i] > array[i+1]) {
      value = array[i];
    }
  }
  return value;
}
console.log(largest(listOfNumbers));
console.log();
console.log("Looping though the array to find and print the smallest value:")
function smallest(array) {
  let small = array[0];
  for (let j = 0;j <= array.length;j++) {
    if (small > array[j]) {
      small = array[j];
    }
  }
  return small;
}
console.log(smallest(listOfNumbers));
console.log();
console.log("Looping though an array to print all of its values greater than 0: ");
function zero(array) {
  for (let z = 0;z < array.length;z++) {
    if (array[z] > 0) {
      console.log(array[z]);
    }
  }
}
zero(listOfNumbers);
console.log();
console.log("Looping though an array to print all of its values greater than a variable we declare: ");
let k = 4;
function moreThanK(array) {
  for (let p = 0;p < array.length;p++) {
  if (array[p] > k) {
    console.log(array[p]);
  }
 }
}
moreThanK(listOfNumbers);
console.log();
console.log("Looping though the array to print all of its even values: ");
function evens(array) {
  for (let w = 0;w < array.length;w++) {
  if (array[w]%2 === 0) {
    console.log(array[w]);
  }
 }
}
evens(listOfNumbers);
console.log();
console.log("Now we will print out the contents of 'listofNumbers' sorted from smallest to largest:");
let list = listOfNumbers.sort();
console.log(list);
function printArray(array) {
  for (let x = 0;x < array.length;x++) {
    console.log(array[x]);
  }
}
printArray(list);
console.log();
console.log("And now from largest to smallest:")
let revList = list.reverse();
console.log(revList);
printArray(revList);
console.log("Done with number arrays!")

/*
- [ ] Declare an array containing at least 8 numbers called `listOfNumbers` and...
  - [ ] Print out the largest element
  - [ ] Print out the smallest element
  - [ ] Print out all the elements greater than `0`
  - [ ] Print out all the elements greater than `k`, where `k` is a variable containing a number
  - [ ] Print out all the even elements
- [ ] Using `sort()`...
  - [ ] Print out elements of `coolArray` sorted from largest to smallest
  - [ ] Print out the elements of `coolArray` sorted from smallest to largest
*/
