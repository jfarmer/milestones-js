coolArray=['one', 'two', 'three', 'four', 'five'];
console.log('The length of coolArray is;',coolArray.length);
console.log('The first element is;', coolArray[0]);
console.log('The second element is:', coolArray[1]);
console.log('The last element is:', coolArray[coolArray.length - 1]);
let k=2;
console.log('The "k" element is:', coolArray[k]);

console.log();

coolArray[0] = 'apples';
console.log('Now, the first element of coolArray is:', coolArray[0]);
console.log('And coolArray is:', coolArray);
coolArray[1] = 'pizza';
console.log('Now, the second element is:', coolArray[1]);
console.log('And coolArray is:', coolArray);
k=3;
console.log('The k element is:', coolArray[k]);
coolArray.push('six');
console.log('This is coolArray w/ an appended element:', coolArray);
coolArray.pop();
console.log('This is coolArray w/ the last element removed:', coolArray);
coolArray.unshift('zero');
console.log('This is coolArray w/ prepended element:', coolArray);

coolArray.shift();
console.log('This is coolArray w/ first element removed:', coolArray);
