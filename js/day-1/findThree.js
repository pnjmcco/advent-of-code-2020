const findThree = (input) => {
  const array = input.toString().split('\n').map((i) => parseInt(i, 10));
  for (first in array) {
    for (second in array) {
      for (third in array) {
        if (array[first] + array[second] + array[third] === 2020) {
          return array[first] * array[second] * array[third];
        }
      }
    }
  }
};

module.exports = findThree;
