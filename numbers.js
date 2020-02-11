let num1 = 10
let num2 = 20

console.log('addition' ,num1 + num2 );
console.log('subtraction' , num1-num2);
console.log('multiplication', num1 * num2 );
console.log('division', num1/num2);
console.log('module/ remainder of division of 2 numbers', num1%num2);
console.log('power of num1 to the num2', num1**num2);
console.log('the result as an integer, stripped out of its decimals', Math.floor(num1/num2));
let blah = 24
console.log('blah =' , blah);
console.log('right most digit:', blah%10);
console.log('is even if blah%2=0. blah%2=', blah%2);
blah++;
console.log('increment by 1', blah);
blah+=2;
console.log('increment by 2', blah);
blah+=10;
console.log('increment by 10', blah);
let k=4;
console.log('k is', k);
blah+=k;
console.log('increment by k', blah);
console.log('------NOW WE DECREMENT-------');
blah--;
console.log('decrement by 1', blah);
blah-=2
console.log('decrement by 2', blah);
blah-=10
console.log('decrement by 10', blah);
blah-=k
console.log('decrement by k', blah);
console.log('end of numbers.js');
