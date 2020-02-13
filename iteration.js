console.log('Print out every integer between `40` and `60` (including both `40` and `60`)');
for (let a=40;a<=60; a++){
  console.log(a);
}
console.log('-------------------');

console.log('Print out every even integer between `40` and `60` (including both `40` and `60`)');
for (let k=40;k<=60; k+=2){
  console.log(k);
}
console.log('-------------------');

console.log('Print out every integer between `min` and `max` (inclusive)');
let min=8;
let max=24;
for (let j=min; j<=max; j++){
  console.log(j)
}
console.log('-------------------');

console.log('Print out every even integer between `min` and `max` (inclusive)');
for (let i=min; i<=max; i+=2){
  console.log(i)
}
console.log('-------------------');

console.log(' Print the first `10` multiples of 7');
for(let b=1; b<=7; b++){
  console.log('7 times', b, '=' , 7 * b);
}
console.log('-------------------');

console.log('Print the first `k` multiples of `7`, where `k` is a variable containing a positive integer');
let k=9
for(let c=1; c<=k; c++){
  console.log('7 times', c, '=' , 7 * c);
}
console.log('-------------------');

console.log('- Print the first `k` multiples of `n`, where `k` is a variable containing a positive integer and `n` is any number');
let n=5;
for(let d=1; d<=k; d++){
  console.log(`${n} times ${d} =`, n * d);
}
console.log('------------')
console.log('This is the end of iteration.js');
