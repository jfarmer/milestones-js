let listOfStrings = ["tree","bush","shrub","copse","outcropping","grove","forest","sapling"];
console.log("Given an array filled with strings, returns the longest string:")
function longestString (array) {
  let longest = array[0].length;
  let longestWord = "";
  for (let i = 0; i<array.length;i++) {
    if (array[i].length > longest) {
      longest = array[i].length;
      longestWord = array[i];
    }
  }
  console.log(longestWord);
}
longestString(listOfStrings);
console.log("Given an array filled with strings, returns the shortest string:")
function shortestString (array) {
  let shortest = array[0].length;
  let shortestWord = "";
  for (let j = 0; j < array.length; j++) {
    if (array[j].length <= shortest) {
      shortest = array[j].length;
      shortestWord = array[j];
    }
  }
  console.log(shortestWord);
}
shortestString(listOfStrings);

/*
- [ ] Define an array containing at least 8 strings called `listOfStrings` and...
  - [ ] Print out the longest string
  - [ ] Print out the shortest string
  - [ ] Print out all the strings longer than `3` characters
  - [ ] Print out all the strings longer than `minLength` characters, where `minLength` is a variable containing a number
  - [ ] Print out the first string that begins with the letter `A`
  - [ ] Print `'found it!'` if `listOfStrings` contains the string `'needle'`
- [ ] Using `sort()`...
  - [ ] Print out elements of `listOfStrings` sorted alphabetically (from A to Z)
  - [ ] Print out the elements of `listOfStrings` sorted reverse alphabetically (from Z to A)
*/
