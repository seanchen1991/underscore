// Takes an array of objects and returns an array of the values of a certain property in it.

function _.pluck(collection, key) {
  return _.map(collection, function(item) {
    return item[key];
  });
}
