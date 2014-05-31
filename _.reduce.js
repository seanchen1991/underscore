//_.reduce collects a composite value from the incremental results of a function
//supplied with an accumulation value and each value in a collection.

function _.reduce(list, iterator, memo){  
  if (list.length > 0 && memo === undefined) {
    var start = list[0];
    _.each(list, function(element) {
      start = iterator(start, element);
    })
  } else {
    var start = memo;
    _.each(list, function(element) {
      start = iterator(start, element);
    })
  }
  return start;
}
