function characterPosition(ourString) {
  var noSpaces = ourString.join("").toLowerCase();
  var letters = {};

  for (i in noSpaces) {
    letters.hasOwnProperty(noSpaces[i]) ? letters[noSpaces[i]].push(i) : letters[noSpaces[i]] = [i];
  }
  return letters;
}
console.log(characterPosition(process.argv.slice(2)));