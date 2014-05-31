// Calls the method named by methodName on each value in the list.

function _.invoke(collection, functionOrKey, args) {
  return _.map(collection, function(element) {
    return (typeof functionOrKey == 'function' ? functionOrKey : value[functionOrKey]).apply(value, args);
  });
}
