

console.log("Prints out every integer between `40` and `60` (including both `40` and `60`):");
function fourTSixT() {
for (let i = 40; i<=60;i++){
  console.log(i + " ");

}
}
fourTSixT();
console.log();
console.log("Prints out every even integer between 40 and 60 (inclusive):");
function evensFourTSixT() {
for (let i = 40; i<=60;i++) {
  if (i%2 ===0) {
    console.log(i + " ");
  }
}
}
evensFourTSixT();
console.log();
console.log("Prints out every integer between a min and a max variable, inclusive:");
let min = 33;
let max = 44;
function minMax() {
  for (let q = min; q <= max; q++) {
    console.log(q + " ");
  }
}
minMax();
console.log();
console.log("Prints out every even integer between a min and a max variable, inclusive of min and max:")
function evens() {
  for (let j = min; j <= max; j++){
    if (j === min || j === max || j%2 === 0){
      console.log(j + " ");
    }
  }
}
evens();
console.log();
console.log("Prints out the first 10 multiples of 7:");
function ten() {
  for(let l = 1;l <= 10;l++) {
      console.log(l*7);
  }
}
ten();
console.log();
console.log("When given a positive integer, k, this function prints out 7 times k:");
function sevens(k) {
if (k > 0) {
  for (let v = 1;v<=k;v++){
    console.log(v*k);
    console.log();
  }
}
}
sevens(9);
console.log();
console.log("We will use our variable k again, make sure it is positive, and print k multiples of a new variable which can be any number...");
function mult(k,n) {
  if (k > 0) {
    let p = 1;
    while (p <= k) {
      console.log(p*n);
      p++;
      console.log();
    }
  }
}
console.log("Notice how I used a while loop here instead, but it is doing essentially the same thing")
console.log("Function used here to print the first 9 multiples of 11:")
mult(9,11);
/*
- Print out every even integer between `40` and `60` (including both `40` and `60`)
- Define variables `min` and `max` containing integers and...
  - Print out every integer between `min` and `max` (inclusive)
  - Print out every even integer between `min` and `max` (inclusive)
- Print the first `10` multiples of `7`
- Print the first `k` multiples of `7`, where `k` is a variable containing a positive integer
- Print the first `k` multiples of `n`, where `k` is a variable containing a positive integer and `n` is any number
*/
console.log();
console.log("Done with number loops!");
