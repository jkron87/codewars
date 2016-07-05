function validate(creditCardNumber) {
  myArray = creditCardNumber.toString().split('');

  for (i = 0; i < myArray.length; i++) {
    myArray[i] = parseInt(myArray[i], 10);
  }

  if (myArray.length > 16) {
    return false;
  }

  if (!creditCardNumber) {
    return false;
  }
  /*This multiplies the odd or even numbers in the array by two*/

  if (myArray.length % 2 === 0) {
    for (i = 0; i < myArray.length; i++) {
      if ((i % 2) === 0) {
        doubledNumber = myArray[i] * 2;
        if (doubledNumber > 9) {
          doubledNumber -= 9;
        }

        myArray[i] = doubledNumber;
      }
    }
  }else {
    for (i = 0; i < myArray.length; i++) {
      if ((i % 2) !== 0) {
        doubledNumber = myArray[i] * 2;
        if (doubledNumber > 9) {
          doubledNumber -= 9;
        }

        myArray[i] = doubledNumber;
      }
    }
  }

  /*Add all the numbers together */
  var sum = 0;

  for (var i = 0; i < myArray.length; i++) {
    sum += myArray[i];
  }

  if (sum % 10 === 0) {
    return true;
  }

  return false;
}

result = validate(3405983405);

console.log(result);
