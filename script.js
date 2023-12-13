function numberToWord(number) {
  switch (true) {
      case number === 1:
          return "One";
          break;
      case number === 2:
          return "Two";
          break;
      case number === 3:
          return "Three";
          break;
      case number === 4:
          return "Four";
          break;
      case number === 5:
          return "Five";
          break;
      case number === 6:
          return "Six";
          break;
      case number === 7:
          return "Seven";
          break;
      case number === 8:
          return "Eight";
          break;
      case number === 9:
          return "Nine";
          break;
      case number === 10:
          return "Ten";
          break;
      case number >= 11:
          return "Out of Range";
          break;
      default:
          return "Invalid Input";
          break;
  }
}

console.log(numberToWord (1)) // One
console.log(numberToWord (10)) // Ten
console.log(numberToWord (11)) // Out of Range
console.log(numberToWord ('one')) // Invalid Input