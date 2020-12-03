const fs = require('fs');
const treeCounter = require('./treeCounter');

describe('Count how many trees you will hit on the trajectory you\'re on', () => {
  it('should return 2', () => {
    const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
    expect(treeCounter(input, 3, 1)).toBe(7);
  });

  it('xSpeed is 1, y speed is 1, should return 211', () => {
    fs.readFile('day-3/input.txt', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      expect(treeCounter(data, 1, 1)).toBe(67);
    });
  });

  it('xSpeed is 3, y speed is 1, should return 211', () => {
    fs.readFile('day-3/input.txt', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      expect(treeCounter(data, 3, 1)).toBe(211);
    });
  });

  it('xSpeed is 5, y speed is 1, should return 211', () => {
    fs.readFile('day-3/input.txt', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      expect(treeCounter(data, 5, 1)).toBe(77);
    });
  });

  it('xSpeed is 7, y speed is 1, should return 211', () => {
    fs.readFile('day-3/input.txt', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      expect(treeCounter(data, 7, 1)).toBe(89);
    });
  });

  it('xSpeed is 1, y speed is 2, should return 211', () => {
    fs.readFile('day-3/input.txt', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      expect(treeCounter(data, 1, 2)).toBe(37);
    });
  });
});

describe('multiply them all', () => {
  it('shout equal', () => {
    const expected = 3584591857;
    fs.readFile('day-3/input.txt', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      const one = treeCounter(data, 1, 1);
      const two = treeCounter(data, 3, 1);
      const three = treeCounter(data, 5, 1);
      const four = treeCounter(data, 7, 1);
      const five = treeCounter(data, 1, 2);
      const actual = one * two * three * four * five;
      expect(actual).toBe(expected);
    });
  });
});
