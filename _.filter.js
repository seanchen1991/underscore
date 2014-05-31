//_.filter calls a predicate function that returns a true or false value and grabs 
//each value where said predicate returned true, returning them in a new collection.

function _.filter(list, predicate){  
  var array = [];
  if (list == null){
    return list;
  };
  _.each(list, function(item) {        
    if (predicate(item)) {
      array.push(predicate(item));
    }
  })
  return array;
}
