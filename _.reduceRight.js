//_.reduceRight does the exact same thing as _.reduce except it iterates over list from right to left.

function _.reduceRight(list, iterator, memo, [context]){
  list = list.reverse();                                  //flip the order of list at the beginning of the function
  for (var i = 0; i < list.length; i++){
    memor = iterator(memo, list[i]);
  return memo;
};
