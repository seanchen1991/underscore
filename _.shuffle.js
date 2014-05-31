// Creates a new shuffled version of the given array with no duplicates and the same length.

function _.shuffle(array) {
  var rand;
  var index = 0;
  var randomized = [];
  _.each(array, function(value) {
    rand = Math.floor(Math.random() * index++);
    randomized[index - 1] = randomized[rand];
    randomized[rand] = value;
  })
  return randomized;
}
