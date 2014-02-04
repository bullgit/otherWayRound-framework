/*
 *
 * Function takes a string.
 * String gets reversed and then returned as new string.
 *
 */

function otherWayRound(string) {

  var stringArray = string.split('');

  var newString = [];

  for (var i = stringArray.length - 1; i >= 0; i--) {
    newString.push(stringArray[i]);
  }

  var returnString = newString.join('');

  return returnString;

}