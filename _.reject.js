function _.reject(collection, test) {
  return _.filter(collection, function(item) {
    return !test(item);
  });
}
