// Version to be submitted to Codewars

function encode(string) {
  let result = string
    .split("")
    .map((char) => {
      switch (char) {
        case "a":
          return (char = 1);
        case "e":
          return (char = 2);
        case "i":
          return (char = 3);
        case "o":
          return (char = 4);
        case "u":
          return (char = 5);
        default:
          return char;
      }
    })
    .join("");

  return result;
}

function decode(string) {
  let result = string
    .split("")
    .map((char) => {
      switch (char) {
        case "1":
          return (char = "a");
        case "2":
          return (char = "e");
        case "3":
          return (char = "i");
        case "4":
          return (char = "o");
        case "5":
          return (char = "u");
        default:
          return char;
      }
    })
    .join("");

  return result;
}
