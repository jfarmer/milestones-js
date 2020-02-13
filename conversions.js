In a file called `conversions.js`, you should be able to do the following:

console.log("To turn a number to a string use the toString() function:");
let num = 1234;
let numString = num.toString();
console.log(numString);
console.log("Gives type of variable: " + numString.typeOf());
console.log();
console.log("To turn a string to a number use the Number() function:");
let wordNum = "1234";
let numNum = wordNum.number();
console.log(numString);
console.log(wordNum.typeOf());
console.log();
console.log("To turn a string into an array of its characters:");
let charArray = numString.split("");
console.log(numArray + numArray.typeOf());


  ```javascript
  'apples'
  ['a', 'p', 'p', 'l', 'e', 's']
  ```

- [ ] Given an array containing strings, join the strings together into a single string

  ```javascript
  ['one', '--two--', 'three']
  'one--two--three'
  ```

- [ ] Given an array containing strings, join the strings together into a string separated by a `|` character

  ```javascript
  ['one', 'two', 'three']
  'one|two|three'
  ```
