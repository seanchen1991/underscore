function _.indexOf(array, target) {
  var result = -1;
  _.each(array, function(item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });
  return result;
}
