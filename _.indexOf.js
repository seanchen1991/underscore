/*Returns the index at which value can e found in the array, or -1 if the value is not
present in the array.*/

function _.indexOf(array, target) {
  var result = -1;
  _.each(array, function(item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });
  return result;
}
