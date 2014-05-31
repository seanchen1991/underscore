//_.reduceRight does the exact same thing as _.reduce except it iterates over list from right to left.

function _.reduceRight(list, iterator, memo){
  list = list.reverse();                                  //flip the order of list at the beginning of the function
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
