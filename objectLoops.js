let coolObject = {
  Album : "A Love Supreme",
  Artist : "John Coltrane",
  Instrument : "Saxophone",
  Genre : "Jazz",
  Birthplace : "Hamlet, NC" };
console.log("After establishing a new object, loop through it to print out every key and value in it:")
function objectLoop(object) {
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
}
objectLoop(coolObject);
console.log();
console.log("Now we will use an alphabetical sort() on our object and print its contents out in order");
function objectASort(original) {
  let keys = Object.keys(original),i, len = keys.length;

  keys.sort();

  for (let i = 0; i < len; i++) {
  k = keys[i];
  console.log(k + ':' + original[k]);
}
}
objectASort(coolObject);
console.log();
console.log("Now we will take the original object and print its contents in reverse alphabetical order:");
function objectReverseSort(original) {
  let keys = Object.keys(original),i, len = keys.length;

  keys.sort();
  keys = Object.assign([], keys).reverse();

  for (let i = 0; i < keys.length; i++) {
  k = keys[i];
  console.log(k + ':' + original[k]);
}
console.log();
}
objectReverseSort(coolObject);
console.log();
console.log("Now we will return only the months, in the daysinMoth object, that have 31 days:");
let daysInMonth = {
  January : 31,
  February : 28,
  March : 31,
  April : 30,
  May : 31,
  June : 30,
  July : 31,
  August : 31,
  September : 31,
  October : 31,
  November : 30,
  December : 31 };
function find(object) {
  //let p = [];
  let keys = Object.keys(object),i, len = keys.length;
  for (let j = 0; j < len; j++) {
    if (object[keys[j]] === 31) {
    console.log(keys[j]);
    }
}
//console.log(p);
}
find(daysInMonth);
console.log();
console.log("Done looping through objects!");
/*
- [ ] Declare an object `coolObject` containing at least 5 key/value pairs and..
  - [ ] Print out every key and value in `coolObject`
  - [ ] Without changing `coolObject`, use `sort()` to...
    - [ ] Print every key and value in `coolObject` in alphabetical order (A to Z)
    - [ ] Print every key and value in `coolObject` in reverse alphabetical order (Z to A)
- [ ] Iterate over the `daysInMonth` object from the [Objects](#objects) section, printing out the name of every month that has `31` days.
*/
