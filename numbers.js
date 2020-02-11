let num1 = 3458;
let num2 = 2;

let add = num1 + num2;
//adds the values together
let less = num1 - num2;
//subtracts second value from first value
let times = num1 * num2;
// multiplies the two values
let divide = num1 / num2;
// divides first value by the second value
let modulo = num1 % num2;
// shows the remainder when first value is divided by the second
let exponent = num1 ** num2;
// puts to second value as an exponent of the first value
let floor = Math.floor(num1 / num2);
// math.floor reduces any number's decimal down to the nearest integer

//if the values of num1 and num2 were changed to other positive integers, these functions would still work - if either were changed to zero or a negative number, then division, modulo, and exponents could not work
let blah = 808;
let rightDig = 808%100;
let evenOrOdd = blah%2;
//evenOrOdd returns 0, which means it is even


//Increment
for(i=0;i < 30;i++)
{
  blah++;
}
for(i=0;i < 30;i++)
{
  blah = blah +2;
}
for(i=0;i < 30;i++)
{
  blah = blah +10;
}
let k = 1;
function variable(blah,k)
{
  for(i=0;i < 30;i++)
{
  blah = blah + k;
}
return blah;
}

//Decrement
for(i=0;i < 30;i++)
{
  blah = blah -1;
}
for(i=0;i < 30;i++)
{
  blah = blah - 2;
}
for(i=0;i < 30;i++)
{
  blah = blah - 10;
}
let k = 1;
function variable(blah,k)
{
  for(i=0;i < k;i++)
{
  blah = blah - k;
}
return blah;
}

Get the right-most digit in blah using the % operator
 Determine whether blah is even or odd
 Increment the value of blah...
 By 1
 By 2
 By 10
 By k, where k is a variable containing a number
 Decrement the value of blah...
 By 1
 By 2
 By 10
 By k, where k is a variable containing a number
