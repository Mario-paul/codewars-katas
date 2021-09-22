// Comment out your code on this file for future reference.

// separate integer and decimals, check that decimal is greater or lesser than 0.5, then round up or down
Math.round = function (number) {
  let round = 0;
  let int = Number.parseInt(number);
  let decimal = number - int;

  if (decimal >= 0.5) round = 1;

  return int + round;
};

// If number is integer, return number. else, round number up.
Math.ceil = function (number) {
  if (Number.isInteger(number)) return number;
  else {
    let int = Number.parseInt(number);
    return int + 1;
  }
};

// Floor is pretty much any float number rounded down to integer
Math.floor = function (number) {
  let int = Number.parseInt(number);
  return int;
};
