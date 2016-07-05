function tea42(input) {
  var output = input + '';
  if (output.indexOf('2') !== -1) output = output.replace(/2/g, 't');
  return output;
}
