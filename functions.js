
console.log("Here is a function that takes in a name and greets you as you step out of the Matrix:");
function greet(name) {
  console.log("Welcome to the desert of the real " + name);
}
greet("Neo");
console.log();
console.log("Here is a function that takes in a temperature number and meaures it as hot or cold (or exactly 100d):");
function hotOrCold(number) {
 if (number > 100) {
   console.log("hot!");
 }
 else if (number === 100) {
   console.log("correct");
 }
 else {
   console.log("cold");
 }
}
console.log();
console.log();
console.log("Functions for adding 2 numbers, sum of an array, finding the largest of two numbers, and largest in an array:":");
function add(n1,n2) { return n1+n2;}
function sum(array) {
 let sum = 0;
 for (let j = 0;j<array.length;j++) {
  sum = sum + array[j];
 }
 return sum;
}
function larger(n1,n2) {
  if (n1 > n2) {
    return n1;
  }
  else if (n1 < n2) {
    return n2;
  }
  else if (n1 === n2) {
    return "equal";
  }
}
console.log(larger(2,3));
function largest(array) {
    let larg = array[0];
    for (let q = 1;q<array.length;q++) {
      larg = larger(larg, array[q]);
      }
    console.log(larg);
  }

  array1 = [1,2,3,4,5,6,7,8,9];
  largest(array1);
  console.log();
  function reverse(array) {
    let reverse = [];
    for(let z = array.length-1; z >= 0;z--) {
      reverse.push(array[z]);
    }
    console.log(reverse);
  }
  console.log();
  console.log("Here is one that sorts phone numbers by area code for Chicago (773,312, and 872):");
  function isChicagoPhoneNumber(array) {
    let comp = false;
    for (q =0;q<array.length-1;q++) {
      let areaCode = [];
      let digits = array[q];
      let Code;
      areaCode.push(digits[0]);
      areaCode.push(digits[1]);
      areaCode.push(digits[2]);
      Code = areaCode.join("");
      if (Code !== "773") {
        if (Code !== "312") {
          if (Code !== "872") {
        return false;
        }
      }
    }
    if (Code.includes("773") || Code.includes("312") || Code.includes("872"))
    {
      comp = true;
    }
  }
  if (comp === true) {
    return true;
  }
  }
let chi = ["773-333-3340","312-457-9807","872-851-9990","312-333-8898"];
console.log(isChicagoPhoneNumber(chi));
console.log();
console.log("This one takes a string and returns an object that counts how many of each letter is in it:");
function stringToCharacters(string) {
  let testArray = string.split("");
  return testArray;
}


function itemCounts(string) {
  let array = stringToCharacters(string);
  let counts = {};
  for (let i = 0; i < array.length; i++)
  {
    if(counts.hasOwnProperty(array[i]) === false)
    { counts[array[i]] = 1;
    }
    else
    {
      counts[ array[i] ] += 1;
    }
  }

  return counts;
}
console.log(itemCounts("Yellow"));

/*
- [ ] A function `greet` that takes in a string representing someone's first name and prints out a greeting. The greeting can be anything, but it should contain the given name.
- [ ] A function called `hotOrCold` that takes a number as input and returns:
    1. `'hot'` if the number is greater than `100`
    1. `'correct'` if the number is exactly `100`
    1. `'cold'` if the number is less than `100`
- [ ] A function `add` that takes two numbers as input and returns (not prints) their sum.
  - [ ] A function `sum` that takes an array of numbers as input and returns their sum (using the `add` function you defined above)
- [ ] A function `larger` that takes two numbers as input and returns the larger of the two (don't use the built-in `Math.max` function)
  - [ ] A function `largest` that takes an array of numbers as input an returns the largest in the array (using the function `larger` you defined above)
- [ ] A function `longer` that takes two strings as input and returns the longer of the two
  - [ ] A function `longest` that takes an array of strings as input and returns the longest string in the array (using the `longer` function you defined above)
- [ ] A function `reverse` that takes an array as input and returns a new array containing the same elements as the input array, but in reverse order (don't use the build-in `reverse()` function)
- [ ] A function `isChicagoPhoneNumber` that takes an array of US phone numbers as input and returns true if the area code is 773, 312, or 872. The phone numbers are strings that look like `'XXX-YYY-ZZZZ'`.
- [ ] A function `letterCounts` that takes a string as an input and returns an object whose keys are the letters in the string and whose values are the number of times a particular letter appears.
*/
