function _.last(array, n) {
  if (n === 0) {
    return [];
  } else if (n > array.length) {
    return array;
  } else {
    return n === undefined ? array[array.length - 1] : array.slice(n - 1, array.length);
  }
}
