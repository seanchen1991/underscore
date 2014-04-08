_.map calls a function on every value in a collection in turn, returning a collection of the results.

function _.map(list, iterator, [context]){
  var array = [];														//initialize an empty
  if (list == null){												//checks that list is nonempty
	  return list;
  }
  for (i = 0; i < list.length; i++){				//calls iterator on each list element and pushes each to array
	  array.push(iterator(list[i]]));
  }
  return array;															//returns the array
};  
