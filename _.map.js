//_.map calls a function on every value in a collection in turn, returning a collection of the results.

function _.map(list, iterator){
  var array = [];														
  _.each(list, function(item) {
    array.push(iterator(item));
  })
  return array;
}
