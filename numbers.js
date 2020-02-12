let num1 = 3458;
console.log("The first number is " + num1);
let num2 = 2;
console.log("The second number is " + num2);

let add = num1 + num2;
console.log("when I *let add = num1 + num2* the value of add is... " + add);
let less = num1 - num2;
console.log("when I *let less = num1 - num2* the value of less is... " + less);
let times = num1 * num2;
console.log("when I *let times = num1 * num2* the value of times is... " + times);
let divide = num1 / num2;
console.log("when I *let divide = num1 / num2* the value of divide is... " + divide);
let modulo = num1 % num2;
// shows the remainder when first value is divided by the second
console.log("when I *let modulo = num1 % num2* the value of modulo is... " + modulo + ", the remainder of num1/num2");
let exponent = num1 ** num2;
// puts to second value as an exponent of the first value
console.log("when I * let exponent = num1 ** num2 * the value of exponent is... " + exponent + ", num1 to the power of num2");
let floor = Math.floor(num1 / num2);
// math.floor reduces any number's decimal down to the nearest integer
console.log("when I *let floor = Math.floor(num1 / num2)* the value of floor is... " + floor + ", the quotient rounded down to the nearest integer");

console.log("If the values of num1 and num2 were changed to other positive integers, these functions would still work - if either were changed to zero or a negative number, then division, modulo, and exponents could not work");
console.log();
let blah = 808;
console.log("If we *let blah = 808* and want to return only the right digit... ");
let rightDig = blah%100;
console.log("Then we would type something like *rightDig = blah%100* using the modulus operator so that rightDig would return... " + rightDig)
let evenOrOdd = blah%2;
console.log("If we wanted to use the computer to figure out if out variable blah is even or odd we would write something like *evenOrOdd = blah%2* and if evenOrOdd returns 0, it means it is even becase 2 fits into blah evenly; it returns... " + evenOrOdd);
//evenOrOdd returns 0, which means it is even

console.log();
console.log("Here is how we increment a variable by 1!");
console.log("First we create for loop, in which we make a counter variable and count up from 0 to a limit; we declare it like this: *for(let i=0;i < 30;i++)*");
console.log("We use this loop to perform the incrementation, which for our sake we will perform on our variable blah");
console.log("Underneath the for loop we write *{ blah++ }* to tell the comupter to add 1 to blah everytime the for loop runs, which here is 30 times");

for(let i=0;i < 30;i++)
{
  blah++;
}
console.log();
console.log("Here is how we increment a variable by 2!");
console.log("First we create another for loop, in which we make a counter variable and count up from 0 to a limit; we declare it like this: *for(let i=0;i < 30;i++)*");
console.log("We use this loop to perform the incrementation, which for our sake we will perform on our variable blah");
console.log("Underneath the for loop we write *{ blah = blah+2 }* to tell the comupter to set blah equal to the existing value of blah plus 2 everytime the for loop runs, which here is 30 times");
for(let i=0;i < 30;i++)
{
  blah = blah +2;
}
console.log();
console.log("Here is how we increment a variable by 10!");
console.log("We create another for loop, which will make a counter variable and count up from 0 to a limit; we declare it like this: *for(let i=0;i < 20;i++)*");
console.log("We use this loop to perform the incrementation, which we will again perform on our good ol' variable blah");
console.log("Underneath the for loop we write *{ blah = blah+10 }* to tell the comupter to set blah equal to the existing value of blah plus 10 everytime the for loop runs, which here is 20 times");
for(let i=0;i < 30;i++)
{
  blah = blah +10;
}
console.log();
console.log("Here is how we increment a variable by a value we determine outselves!");
console.log("First we create a new numerical variable like this: *let k = 7*");
console.log("Then we create another for loop, which will make a counter variable and count up from 0 to a limit; we declare it like this: *for(let i=0;i < 20;i++)*");
console.log("We use this loop to perform the incrementation, which we will again perform on our good ol' variable blah");
console.log("Underneath the for loop we write *{ blah = blah+k }* to tell the comupter to set blah equal to the existing value of blah plus k everytime the for loop runs, which here is adding 7 (k) to blah 20 times");
let k = 7;

function variable(blah,k)
{
  for(i=0;i < 30;i++)
{
  blah = blah + k;
}
return blah;
}

//Decrement




console.log("Here is how we decrement a variable by 1!");
console.log("First we create for loop, in which we make a counter variable and count up from 0 to a limit; we declare it like this: *for(let i=0;i < 3;i++)*");
console.log("We use this loop to perform the incrementation, which for our sake we will perform on our variable blah");
console.log("Underneath the for loop we write *{ blah = blah - 1 }* to tell the comupter to subtract 1 from blah everytime the for loop runs, which here is 3 times");

for(let i=0;i < 30;i++)
{
  blah = blah-1;
}
console.log();
console.log("Here is how we decrement a variable by 2!");
console.log("First we create another for loop, in which we make a counter variable and count up from 0 to a limit; we declare it like this: *for(let i=0;i < 3;i++)*");
console.log("We use this loop to perform the incrementation, which for our sake we will perform on our variable blah");
console.log("Underneath the for loop we write *{ blah = blah-2 }* to tell the comupter to set blah equal to the existing value of blah minus 2 everytime the for loop runs, which here is 3 times");
for(let i=0;i < 30;i++)
{
  blah = blah - 2;
}
console.log();
console.log("Here is how we decrement a variable by 10!");
console.log("We create another for loop, which will make a counter variable and count up from 0 to a limit; we declare it like this: *for(let i=0;i < 3;i++)*");
console.log("We use this loop to perform the incrementation, which we will again perform on our good ol' variable blah");
console.log("Underneath the for loop we write *{ blah = blah-10 }* to tell the comupter to set blah equal to the existing value of blah plus 10 everytime the for loop runs, which here is 3 times");
for(let i=0;i < 30;i++)
{
  blah = blah - 10;
}
console.log();
console.log("Here is how we increment a variable by a value we determine outselves!");
console.log("First we create a new numerical variable like this: *let q = .5*");
console.log("Then we create another for loop, which will make a counter variable and count up from 0 to a limit; we declare it like this: *for(let i=0;i < 5;i++)*");
console.log("We use this loop to perform the incrementation, which we will again perform on our good ol' variable blah");
console.log("Underneath the for loop we write *{ blah = blah-q }* to tell the comupter to set blah equal to the existing value of blah minus q everytime the for loop runs, which here is subtracting .5 from blah 5 times");
let q = .5;

function variable(blah,k)
{
  for(i=0;i < 30;i++)
{
  blah = blah - k;
}
return blah;
}
console.log();
console.log("All done learning about numbers in JS!");
