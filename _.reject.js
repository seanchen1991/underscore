//Return all the elements of an array that don't pass a truth test.

function _.reject(collection, test) {
  return _.filter(collection, function(item) {
    return !test(item);
  });
}
