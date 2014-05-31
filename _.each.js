//_.each calls a function on every value in a collection in turn.

function _.each(list, iterator){
  if (list.length !== undefined){  		                   
    for (var i = 0; i < list.length; i++) {
      iterator(list[i], i, list);
    }
  } else {
    for (var key in list) {
      iterator(list[key], key, list);
    }
  }
};
