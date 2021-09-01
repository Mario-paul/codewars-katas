// Version to be submitted to Codewars

function presses(phrase) {
  phrase = phrase.toUpperCase();
  let counter = 0;
  const phone = [
    ["1"],
    ["A", "B", "C", "2"],
    ["D", "E", "F", "3"],
    ["G", "H", "I", "4"],
    ["J", "K", "L", "5"],
    ["M", "N", "O", "6"],
    ["P", "Q", "R", "S", "7"],
    ["T", "U", "V", "8"],
    ["W", "X", "Y", "Z", "9"],
    ["*"],
    [" ", "0"],
    ["#"],
  ];

  phrase.split("").map((char) => {
    phone.map((ele) => {
      if (ele.some((element) => element === char)) {
        counter += ele.findIndex((element) => element === char) + 1;
      }
    });
  });

  return counter;
}
