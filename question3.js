// Given a list_of_ints, find the highest_product you can get from three of the integers.
// The input list_of_ints will always have at least three integers.
var list_of_ints = [3,6,7,9,13,5,7,8];
var highest_product = function(intArray){
  var resultsArray = [intArray[0], intArray[1], intArray[2]];
  for (var i = 3; i < intArray.length; i++) {
    if (intArray[i] > resultsArray[2]) {
      resultsArray[0] = resultsArray[1];
      resultsArray[1] = resultsArray[2];
      resultsArray[2] = intArray[i];
    } else if (intArray[i] > resultsArray[1]) {
      resultsArray[0] = resultsArray[1];
      resultsArray[1] = intArray[i];
    } else if (intArray[i] > resultsArray[0]) {
      resultsArray[0] = intArray[i];
    }
  }
  return resultsArray[0] * resultsArray[1] * resultsArray[2];
}

console.log(highest_product(list_of_ints));
