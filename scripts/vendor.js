// function that returns a random number ranging between 0 to 100
function getRandomNumber(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

// function that converts input value into an integer
function inputValueToInteger(val) {
  if (isNaN(val) || val === '') {
    throw { message: 'Please enter a valid number' };
  }
  return parseInt(val);
}

// function that checks if something equals to the other
function isEqual(a, b) {
  return a === b;
}
