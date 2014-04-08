//_.filter calls a predicate function that returns a true or false value and grabs 
//each value where said predicate returned true, returning them in a new collection.

function _.filter(list, predicate, [context]){  //predicate is a predicate function that returns a boolean when called on list
  var array = [];
  if (list == null){
    return list;
  };
  for (var i = 0; i < list.length; i++){        //if predicate returns true on list[i], add it to the array
    if (predicate(list[i])){
      array.push(predicate(list[i]));
    }
  };
  return array;
};
