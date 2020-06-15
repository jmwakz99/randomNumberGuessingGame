const RANDOM_NUMBER = getRandomNumber(1, 100);
// collecting user input
const USER_INPUT = prompt('Please guess a number between 1 and 100?');

// catching any errors which may occur when user inputs invalid number
let GUESSED_NUMBER;
try {
  GUESSED_NUMBER = inputValueToInteger(USER_INPUT);
} catch (error) {
  alert(error.message);
  GUESSED_NUMBER = 0;
}

// appropriate message
function logMessage(message) {
  alert(
    `${message} randomNumber = ${RANDOM_NUMBER}, guessedNumber = ${GUESSED_NUMBER}`
  );
}

// check if guessed_number equals to random_number and alert the users with appropriate message
isEqual(RANDOM_NUMBER, GUESSED_NUMBER)
  ? logMessage('CORRECT!!!')
  : logMessage('WRONG GUESS!!');
