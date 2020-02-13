
console.log("!Object Time!");
console.log();
console.log("An object contains keys with their own values, like a collection of flashcards each with a term and a definition (or definitions)");
console.log("new object personData created with {} brackets");
let personData = {};
console.log();
console.log("setting new key ~firstName~ to ~Jean-Luc~ using these syntax:");
personData.firstName = "Jean-Luc";
console.log(personData);
console.log();
console.log("give Jean-Luc a last name and an age like this:");
personData.lastName = "Picard";
personData.age = "79";
console.log("The personData object now looks like this when printed:");
console.log(personData);
console.log();
onsole.log("You can also create an object all at once, in the way that I did here with daysInMonth:");
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
console.log("You can also create an object all at once, in the way that I did here with daysInMonth");
console.log();
console.log("Done!");
