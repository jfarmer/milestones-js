let str1= '12345';
let num= 123

convertedNumber = num + ''
if (convertedNumber === '123'){
console.log('This is a number I turned into a string:', convertedNumber);
}
console.log('---------------');

convertedStringToNumber = parseInt(str1);
if (convertedStringToNumber === 12345){
console.log('I am going to convert a string to a number:' , convertedStringToNumber);
}
console.log('-------------------');

let convertedStringToArray = str1.split('');
console.log('This is a string that I converted to an array that contains its characters', convertedStringToArray);

console.log('--------------------');

let joinedAray = convertedStringToArray.join('');
console.log('This is an array containing strings that I joined together', joinedAray);

console.log('--------------------------------');

let joinedAraySplitted = convertedStringToArray.join('|');
console.log('This is an array containing strings that I joined together', joinedAraySplitted);

console.log('---------------');
console.log('This is the end of the conversion.js');
