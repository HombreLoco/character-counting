//write function to return all unique characters in a given
//string and number of times that character is used in the string

function countCharacters(ourString) {
  var noSpaces = ourString.join("").toLowerCase();
  var letters = {};

  for (i in noSpaces) {
    letters[noSpaces[i]] = letters.hasOwnProperty(noSpaces[i]) ? ++letters[noSpaces[i]] : letters[noSpaces[i]] = 1;
  }
  return letters;
}
console.log(countCharacters(process.argv.slice(2)));

