function _.each(list, iterator, [context]){
  if (list == null){  		                 //checks if list is empty and returns it if it is
    return list;
  }
  if (list.typeOf == 'object'){			 //if list is an object, return the list element associated with each key
    for (key in list){
      iterator(list[key], key, list);									
    }
    else if (list.typeOf == 'array'){		//if list is an array, performs forEach on the list
      for (var i = 0; i < list.length; i++){
        iterator(list[i]);
      }
   }
};
