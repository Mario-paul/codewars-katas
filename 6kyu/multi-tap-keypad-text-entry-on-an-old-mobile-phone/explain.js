// Comment out your code on this file for future reference.

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

  // Split given phrase into chars, map through them and for each one check the phone array for the char.
  // Then, find the index, add 1, and add the sum to the counter. Do this for each char.
  phrase.split("").map((char) => {
    phone.map((ele) => {
      if (ele.some((element) => element === char)) {
        counter += ele.findIndex((element) => element === char) + 1;
      }
    });
  });

  return counter;
}
