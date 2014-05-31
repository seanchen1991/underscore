// Determine if the array or object contains a given value using `===`.

function _.contains(collection, target) {
  return _.reduce(collection, function(wasFound, item) {
    if (wasFound) {
      return true;
    };
    return item === target;
  }, false);
}
