//_.reduce collects a composite value from the incremental results of a function
//supplied with an accumulation value and each value in a collection.

function _.reduce(list, iterator, memo, [context]){  //the memo parameter is the initial state of the reduction
  for (var i = 0; i < list.length; i++){
    memo = iterator(memo, list[i]);                  //update the memo parameter with each function call on list[i]
  return memo;
};
