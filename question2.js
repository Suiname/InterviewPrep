/*
You have a list of integers, and for each index you want to find the product of every integer except the integer at that index.
Write a function get_products_of_all_ints_except_at_index() that takes a list of integers and returns a list of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7*3*4, 1*3*4, 1*7*4, 1*7*3]

Do not use division in your solution.
*/
var exampleArray = [1,7,3,4];
var get_products_of_all_ints_except_at_index = function(inputArray){
  var resultsArray = new Array(inputArray.length);
  for (var i = 0; i < inputArray.length; i++) {
    var product = 1;
    for (var j = 0; j < inputArray.length; j++) {
      if (i!=j){
        product = product * inputArray[j];
      }
    }
    resultsArray[i] = product;
  }
  return resultsArray;
}
console.log(get_products_of_all_ints_except_at_index(exampleArray));
