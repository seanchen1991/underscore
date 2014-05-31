//Creates a new duplicate-free version of given array.

function _.uniq(array) {
  var unique = [];
  _.each(array, function(element) {
    if (_.indexOf(unique, element) == -1) {
      unique.push(element);
    }
  })
  return unique;
}
