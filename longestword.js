var newArray = [];
var firstLetter = '';
var newString;

function titleCase(str) {
  newArray = str.toLowerCase().split('');
  for (var i = 0; i < newArray.length; i++) {
    firstLetter = newArray[i].charAt(0).toUpperCase();
    newArray[i] = newArray[i].replace(newArray[i].charAt(0), firstLetter);
    newString = newArray.join(' ');
  }

  return (newString);

}
