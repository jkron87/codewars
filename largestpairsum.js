function largestPairSum(numbers) {
  var largest = Math.max.apply(Math, numbers);
  var index = numbers.indexOf(largest);
  numbers.splice(index, 1);
  var secLargest = Math.max.apply(Math, numbers);
  return (largest + secLargest);

}

largestPairSum([1, 2, 3, 4]);
