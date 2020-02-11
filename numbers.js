console.log('num1+num2 represents the equation to find the sum of these numbers');
console.log('num1-num2 gives you the difference between these numbers');
console.log('num1*num2 gives you the product of two numbers');
console.log('num1/num2 divides the 1st number by the 2nd');
console.log('num1%num2 reveals if there is a remainder after the numbers are divided');
console.log('num1**num2 put the 2nd number in the sequence as an exponent');
console.log('Math.floor(num1/num2) rounds down the quotient');

function evenorodd (blah){
if (blah%2===0){
return 'even' ;
} else {
  return 'odd';
}
}
//Tried this at first, didn't work
  //function increments (blah){
  //let word = blah;
  //word+=1;
  //console.log(word);
  //word = blah;
  //word+=2;
  //console.log(word);
  //word = blah;
  ///word+=10;
  //console.log(word);
  //word = blah;
  //word-=1;
  //console.log(word);
  //word = blah;
  //word-=2;
  //console.log(word);
  //word = blah;
  //word-=10;
 // return word;
  //}
  //function increments2 (k, blah) {
   // blah+=k;
   // console.log(blah);
    //blah-=k;
    //return blah;

  //}

  //console.log(evenorodd(50));
  //console.log(increments(50));
  //console.log(increments2(10,50));
  function increments (a,b) {
a+=b;
return a;
  }
console.log(increments(50,1));
console.log(increments(50,2));
console.log(increments(50,10));
console.log(increments(50,7)); // 7 is my k
console.log(increments(50,-1));
console.log(increments(50,-2));
console.log(increments(50,-10));
console.log(increments(50,-7)); // 7 is my k as well
