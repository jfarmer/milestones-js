let coolArray = [1,2,3,4,5,6,7];

console.log('I am about to print all elements of the array:')
for (let i=0; i<=coolArray.length-1; i++){
  console.log(coolArray[i]);
}
console.log('---------------');

console.log('I am about to print every other element of the array:')
for (let j=0; j<=coolArray.length-1; j+=2){
  console.log(coolArray[j]);
}
console.log('---------------');

console.log('I am about to print the elements of the array in reverse order:');

for (let k=coolArray.length-1; k>=0; k--){
  console.log(coolArray[k]);
}
console.log('---------------');

console.log('This is the end of Looping_Arrays.js');
