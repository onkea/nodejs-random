var randomstring = require("randomstring");

var defaultString = randomstring.generate();
console.log(defaultString);
// output >> "0Zp6GHdyalFybaG3fJAD1oN7MYq6X9Gs"
//

var sevenString = randomstring.generate(7);
console.log(sevenString)
// output >> "wXMOh2I"
// The output will always be seven random characters

var alphabeticString = randomstring.generate({
  length: 12,
  charset: 'alphabetic'
});
console.log(alphabeticString);
// output >> "HiGwQjMoUFhX"
// The output will be alpha, no numbers!

var numericString = randomstring.generate({
  length: 12,
  charset: 'numeric'
});
console.log(numericString);
// output >> "578599946838"
// The output will only be numbers
