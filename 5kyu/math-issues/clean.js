// Version to be submitted to Codewars

Math.round = function (number) {
  let round = 0;
  let int = Number.parseInt(number);
  let decimal = number - int;

  if (decimal >= 0.5) round = 1;

  return int + round;
};

Math.ceil = function (number) {
  if (Number.isInteger(number)) return number;
  else {
    let int = Number.parseInt(number);
    return int + 1;
  }
};

Math.floor = function (number) {
  let int = Number.parseInt(number);
  return int;
};
